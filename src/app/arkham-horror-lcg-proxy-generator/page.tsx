'use client';
import { atomWithStorage } from 'jotai/utils';
import { Page } from '@/components/Page';
import { http } from '@/utils/http';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { z } from 'zod';
import { PrintSettings } from '@/components/PrintSettings';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom } from '@/utils/paperSizeAtom';
import { downloadImages } from '@/utils/downloadImages';
import { generateProxyPdf } from '@/utils/generateProxyPdf';
import type { ValueOrError } from '@/utils/ValueOrError';

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

async function fetchDeck(deckId: string): Promise<ValueOrError<Deck>> {
  let raw: unknown;

  try {
    const response = await http.get<unknown>(
      `https://arkhamdb.com/api/public/deck/${deckId}`,
    );

    raw = response.data;
  } catch {
    try {
      const response = await http.get<unknown>(
        `https://arkhamdb.com/api/public/deck/${deckId}`,
      );

      raw = response.data;
    } catch {
      return [null, 'fetch failed'];
    }
  }

  const parsed = deckSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid deck data'];

  return [parsed.data, null];
}

async function fetchCard(code: string): Promise<ValueOrError<Card>> {
  let raw: unknown;

  try {
    const response = await http.get<unknown>(
      `https://arkhamdb.com/api/public/card/${code}.json`,
    );

    raw = response.data;
  } catch {
    try {
      const response = await http.get<unknown>(
        `https://arkhamdb.com/api/public/card/${code}.json`,
      );

      raw = response.data;
    } catch {
      return [null, 'fetch failed'];
    }
  }

  const parsed = cardSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid card data'];

  return [parsed.data, null];
}

export default function ArkhamHorrorLcgProxyGeneratorPage() {
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
        message: 'All decks failed to fetch:',
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
        message: 'No card images available to download.',
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
        imageMimeType: 'image/jpeg',
        filename: 'arkham-proxies.pdf',
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
        return `Fetching ${status.total} deck(s)…`;
      case 'fetching-cards':
        return `Fetching card ${status.done}/${status.total}`;
      case 'downloading-images':
        return `Downloading image ${status.done}/${status.total}`;
      case 'generating-pdf':
        return 'Generating PDF…';
      default:
        return null;
    }
  })();

  return (
    <Page title='Arkham Horror LCG Proxy Generator'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          download();
        }}
      >
        <fieldset disabled={isFetching}>
          <label>
            ArkhamDB URLs
            <textarea
              ref={textareaRef}
              onChange={(event) => onTextChange(event.target.value)}
              placeholder='Paste ArkhamDB deck URLs here. Separate them with spaces or enters.'
              rows={8}
              value={text}
              aria-invalid={hasNoMatches ? true : undefined}
            />
            <small>
              {deckIds.length === 0
                ? hasNoMatches
                  ? 'No ArkhamDB URLs detected.'
                  : 'e.g. https://arkhamdb.com/deck/view/123456'
                : `${deckIds.length} ArkhamDB URL(s) detected.`}
            </small>
          </label>

          <PrintSettings />

          <button
            type='submit'
            disabled={deckIds.length === 0 || isFetching}
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
                Done — PDF downloaded as <code>arkham-proxies.pdf</code>.
              </p>
              {status.warnings && (
                <details>
                  <summary>
                    {(status.warnings.failedDecks?.length ?? 0) +
                      (status.warnings.failedCards?.length ?? 0) +
                      (status.warnings.skippedImages?.length ?? 0)}{' '}
                    warning(s)
                  </summary>
                  {status.warnings.failedDecks &&
                    status.warnings.failedDecks.length > 0 && (
                      <>
                        <small>
                          {status.warnings.failedDecks.length} deck(s) failed to
                          fetch:
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
                          {status.warnings.failedCards.length} card(s) failed to
                          fetch:
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
