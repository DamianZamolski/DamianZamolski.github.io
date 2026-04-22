'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Page } from '@/components/Page';
import { createCache } from '@/utils/createCache';
import { fetchGames } from './fetchGames';
import type { GameData } from './fetchGame';
import { findGameIds } from './findGameIds';

const textAtom = atomWithStorage('sleeves-text', '');

const jsonCache = createCache<unknown>('sleeves-json');
const textCache = createCache<string>('sleeves-text-cache');

type Status =
  | { kind: 'idle' }
  | { kind: 'fetching-games'; done: number; total: number }
  | {
      kind: 'results';
      games: Map<string, GameData>;
      failedIds: ReadonlyArray<string>;
    }
  | { kind: 'error'; message: string; ids?: ReadonlyArray<string> };

export default function CardSleevesCounterPage() {
  const t = useTranslations('sleeves');
  const tc = useTranslations('common');
  const [text, setText] = useAtom(textAtom);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [selectedSet, setSelectedSet] = useState<Record<string, number>>({});
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const gameIds = useMemo(() => findGameIds(text), [text]);
  const uniqueGameIds = useMemo(() => Array.from(new Set(gameIds)), [gameIds]);

  const isFetching = status.kind === 'fetching-games';
  const hasNoMatches = text.trim().length > 0 && gameIds.length === 0;

  const onTextChange = (value: string) => {
    setText(value);

    if (status.kind === 'results' || status.kind === 'error') {
      setStatus({ kind: 'idle' });
      setSelectedSet({});
    }
  };

  const cardSetLabel = (
    cardSet: GameData['cardSets'][number],
    index: number,
  ): string => {
    const name = cardSet.name ?? `Set ${index + 1}`;

    return t('setLabel', {
      name,
      count: cardSet.cardTypes.length,
      plural: cardSet.cardTypes.length === 1 ? '' : 's',
    });
  };

  const countSleeves = async () => {
    setStatus({ kind: 'fetching-games', done: 0, total: uniqueGameIds.length });

    const { games, failedIds } = await fetchGames(uniqueGameIds, {
      jsonCache,
      textCache,
      onProgress: (done, total) => {
        setStatus({ kind: 'fetching-games', done, total });
      },
    });

    if (games.size === 0) {
      setStatus({
        kind: 'error',
        message: t('allGamesFailed'),
        ids: failedIds,
      });

      return;
    }

    const initialSelection: Record<string, number> = {};
    for (const id of games.keys()) initialSelection[id] = 0;
    setSelectedSet(initialSelection);

    setStatus({ kind: 'results', games, failedIds });
  };

  const clearCache = () => {
    jsonCache.clear();
    textCache.clear();
  };

  const sleeveCounts = useMemo(() => {
    if (status.kind !== 'results') return [];
    const totals = new Map<string, number>();

    for (const [id, game] of status.games) {
      const index = selectedSet[id] ?? 0;
      const cardSet = game.cardSets[index];
      if (!cardSet) continue;

      for (const { width, height, quantity } of cardSet.cardTypes) {
        const key = `${width} × ${height} mm`;
        totals.set(key, (totals.get(key) ?? 0) + parseInt(quantity, 10));
      }
    }

    return Array.from(totals, ([size, quantity]) => ({ size, quantity })).sort(
      (a, b) => b.quantity - a.quantity,
    );
  }, [status, selectedSet]);

  const progressMax =
    status.kind === 'fetching-games' ? status.total : undefined;

  const progressValue =
    status.kind === 'fetching-games' ? status.done : undefined;

  return (
    <Page slug='card-sleeves-counter'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          countSleeves();
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
              {gameIds.length === 0
                ? hasNoMatches
                  ? t('hintNoMatches')
                  : t('hintEmpty')
                : t('hintDetected', { count: uniqueGameIds.length })}
            </small>
          </label>

          <div role='group'>
            <button
              type='submit'
              disabled={uniqueGameIds.length === 0 || isFetching}
              aria-busy={isFetching}
            >
              {t('countSleeves')}
            </button>
            <button type='button' className='secondary' onClick={clearCache}>
              {tc('clearCache')}
            </button>
          </div>
        </fieldset>

        <output>
          {isFetching && (
            <>
              <progress value={progressValue} max={progressMax} />
              <small>
                {t('fetchingGame', { done: status.done, total: status.total })}
              </small>
            </>
          )}

          {status.kind === 'results' && (
            <>
              {Array.from(status.games).some(
                ([, game]) => game.cardSets.length > 1,
              ) && (
                <section>
                  {Array.from(status.games).map(([id, game]) => {
                    if (game.cardSets.length < 2) return null;

                    return (
                      <label key={id}>
                        {game.name ?? `Game ${id}`}
                        <select
                          value={selectedSet[id] ?? 0}
                          onChange={(event) =>
                            setSelectedSet((prev) => ({
                              ...prev,
                              [id]: Number(event.target.value),
                            }))
                          }
                        >
                          {game.cardSets.map((cardSet, index) => (
                            <option key={index} value={index}>
                              {cardSetLabel(cardSet, index)}
                            </option>
                          ))}
                        </select>
                      </label>
                    );
                  })}
                </section>
              )}

              {sleeveCounts.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>{t('size')}</th>
                      <th>{t('quantity')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sleeveCounts.map(({ size, quantity }) => (
                      <tr key={size}>
                        <td>{size}</td>
                        <td>{quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {status.failedIds.length > 0 && (
                <details>
                  <summary>
                    {t('gamesFailed', { count: status.failedIds.length })}
                  </summary>
                  <ul>
                    {status.failedIds.map((id) => (
                      <li key={id}>
                        <code>{id}</code>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </>
          )}

          {status.kind === 'error' && (
            <article>
              <p role='alert'>
                <strong>{status.message}</strong>
              </p>
              {status.ids && status.ids.length > 0 && (
                <ul>
                  {status.ids.map((id) => (
                    <li key={id}>
                      <code>{id}</code>
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
