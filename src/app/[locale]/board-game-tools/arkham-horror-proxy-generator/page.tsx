'use client';
import { atomWithStorage } from 'jotai/utils';
import { Page } from '@/components/Page';
import { http } from '@/utils/http';
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
import { createCache } from '@/utils/createCache';
import type { ValueOrError } from '@/utils/ValueOrError';

const deckLinkRegExp =
  /https:\/\/arkhamdb\.com\/(?:deck|decklist)\/view\/(\d+)/g;

const textAtom = atomWithStorage('arkham-horror-lcg-proxy-generator-text', '');

const jsonCache = createCache<unknown>('arkham-json');

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

type Deck = z.infer<typeof deckSchema>;
type Card = z.infer<typeof cardSchema>;

type Status =
  | { kind: 'idle' }
  | { kind: 'fetching-decks'; total: number }
  | { kind: 'fetching-cards'; done: number; total: number }
  | { kind: 'downloading-images'; done: number; total: number }
  | { kind: 'generating-pdf' }
  | {
      kind: 'success';
      warnings?: {
        failedDecks?: ReadonlyArray<string>;
        failedCards?: ReadonlyArray<string>;
        skippedImages?: ReadonlyArray<string>;
      };
    }
  | { kind: 'error'; message: string; urls?: ReadonlyArray<string> };

async function fetchJson(url: string): Promise<ValueOrError<unknown>> {
  const cached = jsonCache.get(url);
  if (cached !== undefined) return [cached, null];

  const attempt = async (): Promise<ValueOrError<unknown>> => {
    try {
      const response = await http.get<unknown>(url);

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

async function fetchDeck(deckId: string): Promise<ValueOrError<Deck>> {
  const [raw, err] = await fetchJson(
    `https://arkhamdb.com/api/public/deck/${deckId}`,
  );

  if (err) return [null, err];

  const parsed = deckSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid deck data'];

  return [parsed.data, null];
}

async function fetchCard(code: string): Promise<ValueOrError<Card>> {
  const [raw, err] = await fetchJson(
    `https://arkhamdb.com/api/public/card/${code}.json`,
  );

  if (err) return [null, err];

  const parsed = cardSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid card data'];

  return [parsed.data, null];
}

export default function ArkhamHorrorProxyGeneratorPage() {
  const t = useTranslations('arkhamHorror');
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

  const deckIds = useMemo(
    () => [...text.matchAll(deckLinkRegExp)].map((match) => match[1]!),
    [text],
  );

  const isFetching =
    status.kind === 'fetching-decks' ||
    status.kind === 'fetching-cards' ||
    status.kind === 'downloading-images' ||
    status.kind === 'generating-pdf';

  const hasNoMatches = text.trim().length > 0 && deckIds.length === 0;

  const onTextChange = (value: string) => {
    setText(value);

    if (status.kind === 'success' || status.kind === 'error') {
      setStatus({ kind: 'idle' });
    }
  };

  const download = async () => {
    setStatus({ kind: 'fetching-decks', total: deckIds.length });

    const uniqueDeckIds = Array.from(new Set(deckIds));

    const deckResults = await Promise.all(uniqueDeckIds.map(fetchDeck));
    const deckCache = new Map<string, Deck>();
    const failedDecks: Array<string> = [];

    for (let i = 0; i < deckResults.length; i++) {
      const [deck] = deckResults[i]!;
      const id = uniqueDeckIds[i]!;
      if (deck) deckCache.set(id, deck);
      else failedDecks.push(`https://arkhamdb.com/deck/view/${id}`);
    }

    if (deckCache.size === 0) {
      setStatus({
        kind: 'error',
        message: t('failedDecksAll'),
        urls: failedDecks,
      });

      return;
    }

    const instanceCodes: Array<string> = [];

    for (const id of deckIds) {
      const deck = deckCache.get(id);
      if (!deck) continue;

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

    const uniqueMainCodes = Array.from(new Set(instanceCodes));
    const cardCache = new Map<string, Card>();
    const failedCards: Array<string> = [];

    setStatus({
      kind: 'fetching-cards',
      done: 0,
      total: uniqueMainCodes.length,
    });

    let cardsDone = 0;

    const mainCardResults = await Promise.all(
      uniqueMainCodes.map((code) =>
        fetchCard(code).finally(() => {
          cardsDone++;

          setStatus({
            kind: 'fetching-cards',
            done: cardsDone,
            total: uniqueMainCodes.length,
          });
        }),
      ),
    );

    for (let i = 0; i < mainCardResults.length; i++) {
      const [card] = mainCardResults[i]!;
      const code = uniqueMainCodes[i]!;
      if (card) cardCache.set(code, card);
      else failedCards.push(code);
    }

    const bondedExtras: Array<string> = [];

    for (const card of cardCache.values()) {
      for (const bonded of card.bonded_cards ?? []) {
        for (let i = 0; i < bonded.count; i++) {
          bondedExtras.push(bonded.code);
        }
      }
    }

    instanceCodes.push(...bondedExtras);

    const uniqueBondedCodes = Array.from(new Set(bondedExtras)).filter(
      (code) => !cardCache.has(code),
    );

    if (uniqueBondedCodes.length > 0) {
      const bondedResults = await Promise.all(uniqueBondedCodes.map(fetchCard));

      for (let i = 0; i < bondedResults.length; i++) {
        const [card] = bondedResults[i]!;
        const code = uniqueBondedCodes[i]!;
        if (card) cardCache.set(code, card);
        else failedCards.push(code);
      }
    }

    const imageLinks: Array<string> = [];

    for (const code of instanceCodes) {
      const card = cardCache.get(code);
      if (!card?.imagesrc) continue;

      imageLinks.push(`https://arkhamdb.com${card.imagesrc}`);

      if (card.double_sided && card.backimagesrc) {
        imageLinks.push(`https://arkhamdb.com${card.backimagesrc}`);
      }
    }

    if (imageLinks.length === 0) {
      setStatus({
        kind: 'error',
        message: t('noImages'),
        urls: failedCards,
      });

      return;
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
        imageMimeType: 'image/jpeg',
        filename: 'arkham-proxies.pdf',
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
    if (failedCards.length > 0)
      warnings.failedCards = Array.from(new Set(failedCards));
    if (failedUrls.length > 0) warnings.skippedImages = failedUrls;

    setStatus(
      Object.keys(warnings).length > 0
        ? { kind: 'success', warnings }
        : { kind: 'success' },
    );
  };

  const progressMax =
    status.kind === 'fetching-cards'
      ? status.total
      : status.kind === 'downloading-images'
        ? status.total + 1
        : status.kind === 'generating-pdf'
          ? 1
          : undefined;

  const progressValue =
    status.kind === 'fetching-cards'
      ? status.done
      : status.kind === 'downloading-images'
        ? status.done
        : status.kind === 'generating-pdf'
          ? progressMax
          : undefined;

  const phaseText = (() => {
    switch (status.kind) {
      case 'fetching-decks':
        return t('fetchingDecks', { total: status.total });
      case 'fetching-cards':
        return t('fetchingCards', { done: status.done, total: status.total });
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
    <Page slug='arkham-horror-proxy-generator'>
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
              {deckIds.length === 0
                ? hasNoMatches
                  ? t('hintNoMatches')
                  : t('hintEmpty')
                : t('hintDetected', { count: deckIds.length })}
            </small>
          </label>

          <PrintSettings />

          <div role='group'>
            <button
              type='submit'
              disabled={deckIds.length === 0 || isFetching}
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
                        (status.warnings.failedCards?.length ?? 0) +
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
                  {status.warnings.failedCards &&
                    status.warnings.failedCards.length > 0 && (
                      <>
                        <small>
                          {t('failedCards', {
                            count: status.warnings.failedCards.length,
                          })}
                        </small>
                        <ul>
                          {status.warnings.failedCards.map((code) => (
                            <li key={code}>
                              <code>{code}</code>
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
