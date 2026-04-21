'use client';
import { atomWithStorage } from 'jotai/utils';
import { Page } from '@/components/Page';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { z } from 'zod';
import { PrintSettings } from '@/components/PrintSettings';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom } from '@/utils/paperSizeAtom';
import { downloadImages } from '@/utils/downloadImages';
import { generateProxyPdf } from '@/utils/generateProxyPdf';
import { corsHttp } from '@/utils/corsHttp';
import type { ValueOrError } from '@/utils/ValueOrError';

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

type Deck = z.infer<typeof deckSchema>;

const toImageUrl = (imageLink: string): string =>
  `https://swudb.com/images${imageLink.replace('~', '')}`;

type Status =
  | { kind: 'idle' }
  | { kind: 'fetching-decks'; total: number }
  | { kind: 'downloading-images'; done: number; total: number }
  | { kind: 'generating-pdf' }
  | {
      kind: 'success';
      warnings?: {
        failedDecks?: ReadonlyArray<string>;
        skippedImages?: ReadonlyArray<string>;
      };
    }
  | { kind: 'error'; message: string; urls?: ReadonlyArray<string> };

async function fetchDeck(apiUrl: string): Promise<ValueOrError<Deck>> {
  let raw: unknown;
  try {
    const response = await corsHttp.get<unknown>(apiUrl);
    raw = response.data;
  } catch {
    try {
      const response = await corsHttp.get<unknown>(apiUrl);
      raw = response.data;
    } catch {
      return [null, 'fetch failed'];
    }
  }

  const parsed = deckSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid deck data'];
  return [parsed.data, null];
}

export default function StarWarsUnlimitedProxyGeneratorPage() {
  const [text, setText] = useAtom(textAtom);
  const [cardWidth] = useAtom(cardWidthAtom);
  const [cardHeight] = useAtom(cardHeightAtom);
  const [paperSize] = useAtom(paperSizeAtom);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const deckUrls = useMemo(
    () => text.match(deckLinkRegExp)?.map((url) => url.trim()) ?? [],
    [text],
  );

  const isFetching =
    status.kind === 'fetching-decks' ||
    status.kind === 'downloading-images' ||
    status.kind === 'generating-pdf';

  const hasNoMatches = text.trim().length > 0 && deckUrls.length === 0;

  const onTextChange = (value: string) => {
    setText(value);
    if (status.kind === 'success' || status.kind === 'error') {
      setStatus({ kind: 'idle' });
    }
  };

  const download = async () => {
    setStatus({ kind: 'fetching-decks', total: deckUrls.length });

    const uniqueUrls = Array.from(new Set(deckUrls));
    const apiUrlOf = (url: string) => url.replace('/deck/', '/api/deck/');

    const deckResults = await Promise.all(
      uniqueUrls.map((url) => fetchDeck(apiUrlOf(url))),
    );

    const deckCache = new Map<string, Deck>();
    const failedDecks: Array<string> = [];

    for (let i = 0; i < deckResults.length; i++) {
      const [deck] = deckResults[i]!;
      const url = uniqueUrls[i]!;
      if (deck) deckCache.set(url, deck);
      else failedDecks.push(url);
    }

    if (deckCache.size === 0) {
      setStatus({
        kind: 'error',
        message: 'All decks failed to fetch:',
        urls: failedDecks,
      });
      return;
    }

    const imageLinks: Array<string> = [];

    for (const url of deckUrls) {
      const deck = deckCache.get(url);
      if (!deck) continue;

      imageLinks.push(
        toImageUrl(deck.leader.defaultImagePath),
        toImageUrl(deck.leader.defaultImagePath.replace('.png', '-back.png')),
        toImageUrl(
          deck.leader.defaultImagePath.replace('.png', '-portrait.png'),
        ),
        toImageUrl(deck.base.defaultImagePath),
      );

      for (const card of deck.shuffledDeck) {
        const imageUrl = toImageUrl(card.card.defaultImagePath);
        imageLinks.push(imageUrl, imageUrl, imageUrl);
      }
    }

    setStatus({
      kind: 'downloading-images',
      done: 0,
      total: imageLinks.length,
    });

    const { images, failedUrls } = await downloadImages(imageLinks, {
      onProgress: (done, total) => {
        setStatus({ kind: 'downloading-images', done, total });
      },
    });

    if (images.length === 0) {
      setStatus({
        kind: 'error',
        message: 'All images failed to download:',
        urls: failedUrls,
      });
      return;
    }

    setStatus({ kind: 'generating-pdf' });

    try {
      await generateProxyPdf({
        images,
        cardWidth,
        cardHeight,
        imageMimeType: 'image/png',
        filename: 'star-wars-unlimited-proxies.pdf',
        paperSize,
      });
    } catch (error) {
      setStatus({
        kind: 'error',
        message:
          error instanceof Error
            ? `PDF generation failed: ${error.message}`
            : 'PDF generation failed.',
      });
      return;
    }

    const warnings: NonNullable<
      Extract<Status, { kind: 'success' }>['warnings']
    > = {};
    if (failedDecks.length > 0) warnings.failedDecks = failedDecks;
    if (failedUrls.length > 0) warnings.skippedImages = failedUrls;

    setStatus(
      Object.keys(warnings).length > 0
        ? { kind: 'success', warnings }
        : { kind: 'success' },
    );
  };

  const progressMax =
    status.kind === 'downloading-images'
      ? status.total + 1
      : status.kind === 'generating-pdf'
        ? 1
        : undefined;

  const progressValue =
    status.kind === 'downloading-images'
      ? status.done
      : status.kind === 'generating-pdf'
        ? progressMax
        : undefined;

  const phaseText = (() => {
    switch (status.kind) {
      case 'fetching-decks':
        return `Fetching ${status.total} deck(s)…`;
      case 'downloading-images':
        return `Downloading image ${status.done}/${status.total}`;
      case 'generating-pdf':
        return 'Generating PDF…';
      default:
        return null;
    }
  })();

  return (
    <Page title='Star Wars: Unlimited Proxy Generator'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          download();
        }}
      >
        <fieldset disabled={isFetching}>
          <label>
            SWUDB URLs
            <textarea
              ref={textareaRef}
              onChange={(event) => onTextChange(event.target.value)}
              placeholder='Paste SWUDB URLs here. Separate them with spaces or enters.'
              rows={8}
              value={text}
              aria-invalid={hasNoMatches ? true : undefined}
            />
            <small>
              {deckUrls.length === 0
                ? hasNoMatches
                  ? 'No SWUDB URLs detected.'
                  : 'e.g. https://swudb.com/deck/abc123'
                : `${deckUrls.length} SWUDB URL(s) detected.`}
            </small>
          </label>

          <PrintSettings />

          <button
            type='submit'
            disabled={deckUrls.length === 0 || isFetching}
            aria-busy={isFetching}
          >
            Download
          </button>
        </fieldset>

        <output>
          {isFetching && (
            <>
              {progressMax === undefined ? (
                <progress />
              ) : (
                <progress value={progressValue} max={progressMax} />
              )}
              {phaseText && <small>{phaseText}</small>}
            </>
          )}
          {status.kind === 'success' && (
            <>
              <p role='status'>
                Done — PDF downloaded as{' '}
                <code>star-wars-unlimited-proxies.pdf</code>.
              </p>
              {status.warnings && (
                <details>
                  <summary>
                    {(status.warnings.failedDecks?.length ?? 0) +
                      (status.warnings.skippedImages?.length ?? 0)}{' '}
                    warning(s)
                  </summary>
                  {status.warnings.failedDecks &&
                    status.warnings.failedDecks.length > 0 && (
                      <>
                        <small>
                          {status.warnings.failedDecks.length} deck(s) failed
                          to fetch:
                        </small>
                        <ul>
                          {status.warnings.failedDecks.map((url) => (
                            <li key={url}>
                              <code>{url}</code>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  {status.warnings.skippedImages &&
                    status.warnings.skippedImages.length > 0 && (
                      <>
                        <small>
                          {status.warnings.skippedImages.length} image(s)
                          skipped:
                        </small>
                        <ul>
                          {status.warnings.skippedImages.map((url) => (
                            <li key={url}>
                              <code>{url}</code>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                </details>
              )}
            </>
          )}
          {status.kind === 'error' && (
            <article>
              <p role='alert'>
                <strong>{status.message}</strong>
              </p>
              {status.urls && status.urls.length > 0 && (
                <ul>
                  {status.urls.map((url) => (
                    <li key={url}>
                      <code>{url}</code>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )}
        </output>
      </form>
    </Page>
  );
}
