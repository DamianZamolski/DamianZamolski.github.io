'use client';
import axios from 'axios';
import { atomWithStorage } from 'jotai/utils';
import { jsPDF } from 'jspdf';
import { Page } from '@/components/Page';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { z } from 'zod';

const deckLinkRegExp = /https:\/\/swudb\.com\/deck\/\S+/g;

const textAtom = atomWithStorage('text', '');
const cardWidth = 62;
const cardHeight = 88;

const http = axios.create();

const deckSchema = z.object({
  leader: z.object({ defaultImagePath: z.string() }),
  base: z.object({ defaultImagePath: z.string() }),
  shuffledDeck: z.array(
    z.object({ card: z.object({ defaultImagePath: z.string() }) }),
  ),
});

const decksSchema = z.array(deckSchema);

function chunkArray<T>(arr: Array<T>, size = 9): Array<Array<T>> {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

export default function SleevesPage() {
  const [text, setText] = useAtom(textAtom);
  const [isFetching, setFetching] = useState(false);

  const download = async () => {
    setFetching(true);

    try {
      const deckLinks: Array<string> = (text.match(deckLinkRegExp) ?? []).map(
        (deckLink) => deckLink.replaceAll('deck', 'api/deck'),
      );

      const deckDownloadResponses = await Promise.all(
        deckLinks.map(async (deckLink: string) =>
          http.get<unknown>(`https://corsproxy.io/?url=${deckLink}`),
        ),
      );

      const decks = decksSchema.parse(
        deckDownloadResponses.map(
          (deckDownloadResponse) => deckDownloadResponse.data,
        ),
      );

      const singleCardImageLinks = decks
        .flatMap((deck) => [
          deck.leader.defaultImagePath,
          deck.leader.defaultImagePath.replace('.png', '-back.png'),
          deck.leader.defaultImagePath.replace('.png', '-portrait.png'),
          deck.base.defaultImagePath,
        ])
        .map((imageLink) => imageLink.replace('~', 'https://swudb.com/images'));

      const singleCardImageDownloadPromises = await Promise.allSettled(
        singleCardImageLinks.map((link) =>
          http.get<ArrayBuffer>(`https://corsproxy.io/?url=${link}`, {
            responseType: 'arraybuffer',
          }),
        ),
      );

      const singleCardImages = singleCardImageDownloadPromises
        .filter((promise) => promise.status === 'fulfilled')
        .map((promise) => promise.value.data)
        .map(
          (arrayBuffer) =>
            `data:image/png;base64,${Buffer.from(arrayBuffer).toString('base64')}`,
        );

      const tripleCardImageLinks = decks
        .flatMap((deck) => [
          ...deck.shuffledDeck.map((card) => card.card.defaultImagePath),
        ])
        .map((imageLink) => imageLink.replace('~', 'https://swudb.com/images'));

      const tripleCardImageDownloadPromises = await Promise.allSettled(
        tripleCardImageLinks.map((link) =>
          http.get<ArrayBuffer>(`https://corsproxy.io/?url=${link}`, {
            responseType: 'arraybuffer',
          }),
        ),
      );

      const tripleCardImages = tripleCardImageDownloadPromises
        .filter((promise) => promise.status === 'fulfilled')
        .map((promise) => promise.value.data)
        .map(
          (image) =>
            `data:image/png;base64,${btoa(
              new Uint8Array(image).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ),
            )}`,
        )
        .flatMap((image) => [image, image, image]);

      const cardImages: Array<string> = [
        ...singleCardImages,
        ...tripleCardImages,
      ];

      const pages = chunkArray(cardImages);

      const pdf = new jsPDF();
      const leftMargin = (pdf.internal.pageSize.width - 3 * cardWidth) / 2;
      const topMargin = (pdf.internal.pageSize.height - 3 * cardHeight) / 2;
      pdf.setFillColor(0, 0, 0);

      for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
        const page = pages[pageIndex];

        for (let imageIndex = 0; imageIndex < page.length; imageIndex++) {
          const image = page[imageIndex];
          console.debug(image);

          const blob = await (await fetch(image)).blob();
          const bitmap = await createImageBitmap(blob);
          const shouldRotate = bitmap.width > bitmap.height;
          bitmap.close();

          const yIndex = Math.floor(imageIndex / 3);
          const xIndex = imageIndex - 3 * yIndex;

          const x = leftMargin + xIndex * cardWidth;
          const y = topMargin + yIndex * cardHeight;

          pdf.rect(x, y, cardWidth, cardHeight, 'F');

          pdf.addImage({
            imageData: image,
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

      pdf.save('deck.pdf');
    } catch (error: unknown) {
      console.error(error);
    }

    setFetching(false);
  };

  return (
    <Page title='Star Wars: Unlimited Deck Downloader'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          download();
        }}
      >
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
