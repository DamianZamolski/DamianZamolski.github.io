'use client';
import { atomWithStorage } from 'jotai/utils';
import { Page } from '@/components/Page';
import { http } from '@/utils/http';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { z } from 'zod';
import { PrintSettings } from '@/components/PrintSettings';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom } from '@/utils/paperSizeAtom';
import { downloadImages } from '@/utils/downloadImages';
import { generateProxyPdf } from '@/utils/generateProxyPdf';

const deckLinkRegExp =
  /https:\/\/arkhamdb\.com\/(?:deck|decklist)\/view\/(\d+)/g;

const textAtom = atomWithStorage('arkham-horror-lcg-proxy-generator-text', '');

const deckSchema = z.object({
  investigator_code: z.string(),
  slots: z.record(z.string(), z.number()),
  sideSlots: z
    .union([z.record(z.string(), z.number()), z.array(z.unknown())])
    .optional(),
});

const cardSchema = z.object({
  code: z.string(),
  imagesrc: z.string().optional(),
  backimagesrc: z.string().optional(),
  double_sided: z.boolean().optional(),
  bonded_cards: z
    .array(z.object({ code: z.string(), count: z.number() }))
    .optional(),
});

type Card = z.infer<typeof cardSchema>;

export default function ArkhamHorrorLcgProxyGeneratorPage() {
  const [text, setText] = useAtom(textAtom);
  const [cardWidth] = useAtom(cardWidthAtom);
  const [cardHeight] = useAtom(cardHeightAtom);
  const [paperSize] = useAtom(paperSizeAtom);
  const [isFetching, setFetching] = useState(false);

  const download = async () => {
    setFetching(true);

    const deckIds: Array<string> = [...text.matchAll(deckLinkRegExp)].map(
      (match) => match[1]!,
    );

    const deckResponses = await Promise.all(
      deckIds.map((id) =>
        http.get<unknown>(`https://arkhamdb.com/api/public/deck/${id}`),
      ),
    );

    const decks = deckResponses.map((response) =>
      deckSchema.parse(response.data),
    );

    const cardCache = new Map<string, Promise<Card>>();

    const fetchCard = (code: string): Promise<Card> => {
      let promise = cardCache.get(code);

      if (!promise) {
        promise = http
          .get<unknown>(`https://arkhamdb.com/api/public/card/${code}.json`)
          .then((response) => cardSchema.parse(response.data));

        cardCache.set(code, promise);
      }

      return promise;
    };

    const instanceCodes: Array<string> = [];

    for (const deck of decks) {
      instanceCodes.push(deck.investigator_code);

      for (const [code, qty] of Object.entries(deck.slots)) {
        for (let i = 0; i < qty; i++) instanceCodes.push(code);
      }

      if (deck.sideSlots && !Array.isArray(deck.sideSlots)) {
        for (const [code, qty] of Object.entries(deck.sideSlots)) {
          for (let i = 0; i < qty; i++) instanceCodes.push(code);
        }
      }
    }

    const mainCardResults = await Promise.allSettled(
      Array.from(new Set(instanceCodes)).map(fetchCard),
    );

    const mainCards = mainCardResults
      .filter((r) => r.status === 'fulfilled')
      .map((r) => r.value);

    const bondedExtras: Array<string> = [];

    for (const card of mainCards) {
      for (const bonded of card.bonded_cards ?? []) {
        for (let i = 0; i < bonded.count; i++) {
          bondedExtras.push(bonded.code);
        }
      }
    }

    instanceCodes.push(...bondedExtras);

    await Promise.allSettled(Array.from(new Set(bondedExtras)).map(fetchCard));

    const imageLinks: Array<string> = [];

    for (const code of instanceCodes) {
      let card: Card;

      try {
        card = await fetchCard(code);
      } catch {
        continue;
      }

      if (!card.imagesrc) continue;

      imageLinks.push(`https://arkhamdb.com${card.imagesrc}`);

      if (card.double_sided && card.backimagesrc) {
        imageLinks.push(`https://arkhamdb.com${card.backimagesrc}`);
      }
    }

    const { images } = await downloadImages(imageLinks);

    await generateProxyPdf({
      images,
      cardWidth,
      cardHeight,
      imageMimeType: 'image/jpeg',
      filename: 'arkham-proxies.pdf',
      paperSize,
    });

    setFetching(false);
  };

  return (
    <Page title='Arkham Horror LCG Proxy Generator'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          download();
        }}
      >
        <PrintSettings />
        <label>
          ArkhamDB URLs
          <textarea
            onChange={(e) => setText(e.target.value)}
            placeholder='Paste ArkhamDB deck URLs here. Separate them with spaces or enters.'
            rows={text.split('\n').length + 2}
            style={{ resize: 'none' }}
            value={text}
          />
        </label>
        <button type='submit' aria-busy={isFetching} disabled={isFetching}>
          Download
        </button>
      </form>
    </Page>
  );
}
