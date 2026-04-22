'use client';
import { atomWithStorage } from 'jotai/utils';
import { Page } from '@/components/Page';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { PrintSettings } from '@/components/PrintSettings';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom } from '@/utils/paperSizeAtom';
import { downloadImages } from '@/utils/downloadImages';
import { generateProxyPdf } from '@/utils/generateProxyPdf';
import { corsHttp } from '@/utils/corsHttp';
import { createCache } from '@/utils/createCache';
import type { ValueOrError } from '@/utils/ValueOrError';

const deckLinkRegExp = /https:\/\/swudb\.com\/deck\/\S+/g;

const textAtom = atomWithStorage(
  'star-wars-unlimited-proxy-generator-text',
  '',
);

const jsonCache = createCache<unknown>('swu-json');

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

async function fetchJson(url: string): Promise<ValueOrError<unknown>> {
  const cached = jsonCache.get(url);
  if (cached !== undefined) return [cached, null];

  const attempt = async (): Promise<ValueOrError<unknown>> => {
    try {
      const response = await corsHttp.get<unknown>(url);

      return [response.data, null];
    } catch {
      return [null, 'fetch failed'];
    }
  };

  let result = await attempt();
  if (result[1]) result = await attempt();

  if (result[0] !== null) jsonCache.set(url, result[0]);

  return result;
}

async function fetchDeck(apiUrl: string): Promise<ValueOrError<Deck>> {
  const [raw, err] = await fetchJson(apiUrl);
  if (err) return [null, err];

  const parsed = deckSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid deck data'];

  return [parsed.data, null];
}

export default function StarWarsUnlimitedProxyGeneratorPage() {
  const t = useTranslations('starWarsUnlimited');
  const tc = useTranslations('common');
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
        message: t('failedDecksAll'),
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
        message: t('allImagesFailed'),
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
            ? t('pdfFailed', { message: error.message })
            : t('pdfFailedGeneric'),
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
        return t('fetchingDecks', { total: status.total });
      case 'downloading-images':
        return t('downloadingImages', {
          done: status.done,
          total: status.total,
        });
      case 'generating-pdf':
        return t('generatingPdf');
      default:
        return null;
    }
  })();

  return (
    <Page slug='star-wars-unlimited-proxy-generator'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          download();
        }}
      >
        <fieldset disabled={isFetching}>
          <label>
            {t('urlsLabel')}
            <textarea
              ref={textareaRef}
              onChange={(event) => onTextChange(event.target.value)}
              placeholder={t('placeholder')}
              rows={8}
              value={text}
              aria-invalid={hasNoMatches ? true : undefined}
            />
            <small>
              {deckUrls.length === 0
                ? hasNoMatches
                  ? t('hintNoMatches')
                  : t('hintEmpty')
                : t('hintDetected', { count: deckUrls.length })}
            </small>
          </label>

          <PrintSettings />

          <div role='group'>
            <button
              type='submit'
              disabled={deckUrls.length === 0 || isFetching}
              aria-busy={isFetching}
            >
              {tc('download')}
            </button>
            <button
              type='button'
              className='secondary'
              onClick={() => jsonCache.clear()}
            >
              {tc('clearCache')}
            </button>
          </div>
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
                {t.rich('successMessage', {
                  code: (chunks) => <code>{chunks}</code>,
                })}
              </p>
              {status.warnings && (
                <details>
                  <summary>
                    {t('warningsLabel', {
                      count:
                        (status.warnings.failedDecks?.length ?? 0) +
                        (status.warnings.skippedImages?.length ?? 0),
                    })}
                  </summary>
                  {status.warnings.failedDecks &&
                    status.warnings.failedDecks.length > 0 && (
                      <>
                        <small>
                          {t('failedDecksSome', {
                            count: status.warnings.failedDecks.length,
                          })}
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
                          {t('skippedImages', {
                            count: status.warnings.skippedImages.length,
                          })}
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
