'use client';
import { atomWithStorage } from 'jotai/utils';
import { Page } from '@/components/Page';
import { http } from '@/utils/http';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { z } from 'zod';
import { CardSizeInputs } from '@/components/CardSizeInputs';
import { cardHeightAtom, cardWidthAtom } from '@/utils/cardSizeAtoms';
import { downloadImages } from '@/utils/downloadImages';
import { generateProxyPdf } from '@/utils/generateProxyPdf';

const deckLinkRegExp = /https:\/\/swudb\.com\/deck\/\S+/g;

const textAtom = atomWithStorage(
  'star-wars-unlimited-proxy-generator-text',
  '',
);

const deckSchema = z.object({
  leader: z.object({ defaultImagePath: z.string() }),
  base: z.object({ defaultImagePath: z.string() }),
  shuffledDeck: z.array(
    z.object({ card: z.object({ defaultImagePath: z.string() }) }),
  ),
});

const decksSchema = z.array(deckSchema);

const toImageUrl = (imageLink: string): string =>
  `https://swudb.com/images${imageLink.replace('~', '')}`;

export default function StarWarsUnlimitedProxyGeneratorPage() {
  const [text, setText] = useAtom(textAtom);
  const [cardWidth] = useAtom(cardWidthAtom);
  const [cardHeight] = useAtom(cardHeightAtom);
  const [isFetching, setFetching] = useState(false);

  const download = async () => {
    setFetching(true);

    const deckUrls: Array<string> = (text.match(deckLinkRegExp) ?? []).map(
      (deckLink) => deckLink.replaceAll('deck', 'api/deck'),
    );

    const getDeckResponses = await Promise.all(
      deckUrls.map((deckLink: string) => http.get<unknown>(deckLink)),
    );

    const decks = decksSchema.parse(
      getDeckResponses.map((deckDownloadResponse) => deckDownloadResponse.data),
    );

    const imageLinks: Array<string> = [];

    for (const deck of decks) {
      imageLinks.push(
        toImageUrl(deck.leader.defaultImagePath),
        toImageUrl(deck.leader.defaultImagePath.replace('.png', '-back.png')),
        toImageUrl(
          deck.leader.defaultImagePath.replace('.png', '-portrait.png'),
        ),
        toImageUrl(deck.base.defaultImagePath),
      );

      for (const card of deck.shuffledDeck) {
        const url = toImageUrl(card.card.defaultImagePath);
        imageLinks.push(url, url, url);
      }
    }

    const cardImages = await downloadImages(imageLinks);

    await generateProxyPdf({
      images: cardImages,
      cardWidth,
      cardHeight,
      imageMimeType: 'image/png',
      filename: 'star-wars-unlimited-proxies.pdf',
    });

    setFetching(false);
  };

  return (
    <Page title='Star Wars: Unlimited Proxy Generator'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          download();
        }}
      >
        <CardSizeInputs />
        <label>
          SWUDB URLs
          <textarea
            onChange={(e) => setText(e.target.value)}
            placeholder='Paste SWUDB URLs here. Separate them with spaces or enters.'
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
