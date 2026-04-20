'use client';
import { atomWithStorage } from 'jotai/utils';
import { jsPDF } from 'jspdf';
import { Page } from '@/components/Page';
import { requestWithCorsFallback } from '@/utils/http';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { z } from 'zod';

const deckLinkRegExp = /https:\/\/arkhamdb\.com\/(?:deck|decklist)\/view\/(\d+)/g;

const textAtom = atomWithStorage('arkham-horror-lcg-proxy-generator-text', '');
const cardWidth = 62;
const cardHeight = 88;

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

function chunkArray<T>(
  arr: ReadonlyArray<T>,
  size = 9,
): ReadonlyArray<ReadonlyArray<T>> {
  const chunks: Array<ReadonlyArray<T>> = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

export default function ArkhamHorrorLcgProxyGeneratorPage() {
  const [text, setText] = useAtom(textAtom);
  const [isFetching, setFetching] = useState(false);

  const download = async () => {
    setFetching(true);

    const deckIds: Array<string> = [
      ...text.matchAll(deckLinkRegExp),
    ].map((match) => match[1]!);

    const deckResponses = await Promise.all(
      deckIds.map((id) =>
        requestWithCorsFallback<unknown>(
          `https://arkhamdb.com/api/public/deck/${id}`,
        ),
      ),
    );

    const decks = deckResponses.map((response) =>
      deckSchema.parse(response.data),
    );

    const cardCache = new Map<string, Promise<Card>>();

    const fetchCard = (code: string): Promise<Card> => {
      let promise = cardCache.get(code);
      if (!promise) {
        promise = requestWithCorsFallback<unknown>(
          `https://arkhamdb.com/api/public/card/${code}.json`,
        ).then((response) => cardSchema.parse(response.data));
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

    await Promise.allSettled(
      Array.from(new Set(bondedExtras)).map(fetchCard),
    );

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

    const imageDownloadPromises = await Promise.allSettled(
      imageLinks.map((link) =>
        requestWithCorsFallback<ArrayBuffer>(link, {
          responseType: 'arraybuffer',
        }),
      ),
    );

    const cardImages: ReadonlyArray<ArrayBuffer> = imageDownloadPromises
      .filter((promise) => promise.status === 'fulfilled')
      .map((promise) => promise.value.data);

    const pages = chunkArray(cardImages);

    const pdf = new jsPDF();
    const leftMargin = (pdf.internal.pageSize.width - 3 * cardWidth) / 2;
    const topMargin = (pdf.internal.pageSize.height - 3 * cardHeight) / 2;
    pdf.setFillColor(0, 0, 0);

    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      const page = pages[pageIndex]!;

      for (let imageIndex = 0; imageIndex < page.length; imageIndex++) {
        const image = page[imageIndex]!;

        const blob = new Blob([image], { type: 'image/jpeg' });

        let shouldRotate = false;

        try {
          const bitmap = await createImageBitmap(blob);
          shouldRotate = bitmap.width > bitmap.height;
        } catch (_error) {
          console.error('invalid image', { image: new Uint8Array(image) });
          continue;
        }

        const yIndex = Math.floor(imageIndex / 3);
        const xIndex = imageIndex - 3 * yIndex;

        const x = leftMargin + xIndex * cardWidth;
        const y = topMargin + yIndex * cardHeight;

        pdf.rect(x, y, cardWidth, cardHeight, 'F');

        pdf.addImage({
          imageData: new Uint8Array(image),
          x: x + (shouldRotate ? cardWidth : 0),
          y: y + (shouldRotate ? cardHeight - cardWidth : 0),
          width: shouldRotate ? cardHeight : cardWidth,
          height: shouldRotate ? cardWidth : cardHeight,
          rotation: shouldRotate ? 90 : 0,
        });
      }

      if (pageIndex < pages.length - 1) {
        pdf.addPage();
      }
    }

    pdf.save('arkham-proxies.pdf');

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
