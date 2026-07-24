'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { type SubmitEvent, useEffect, useMemo, useState } from 'react';
import { Page } from '@/components/Page';
import { shuffleArray } from '@/utils/shuffleArray';
import { type GalacticEvent, galacticEvents } from './events';

const allEventIds = galacticEvents.map((event) => event.id);

const eventsBySource = Array.from(
  new Set(galacticEvents.map((event) => event.source)),
).map((source) => ({
  source,
  events: galacticEvents.filter((event) => event.source === source),
}));

const poolAtom = atomWithStorage<Array<string>>(
  'ti4-galactic-event-pool',
  allEventIds,
);

export default function TwilightImperiumIvGalacticEventPickerPage() {
  const [pool, setPool] = useAtom(poolAtom);
  const [drawCount, setDrawCount] = useState(1);
  const [drawnIds, setDrawnIds] = useState<Array<string>>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const poolParam = params.get('pool');
    const drawnParam = params.get('drawn');

    if (poolParam !== null) {
      setPool(poolParam.split(',').filter((id) => allEventIds.includes(id)));
    }

    if (drawnParam !== null) {
      setDrawnIds(
        drawnParam.split(',').filter((id) => allEventIds.includes(id)),
      );
    }
  }, [setPool]);

  useEffect(() => {
    setDrawCount((count) =>
      Math.min(Math.max(1, count), Math.max(1, pool.length)),
    );
  }, [pool.length]);

  const poolSet = useMemo(() => new Set(pool), [pool]);

  const drawnEvents = useMemo(
    () =>
      drawnIds
        .map((id) => galacticEvents.find((event) => event.id === id))
        .filter((event): event is GalacticEvent => Boolean(event)),
    [drawnIds],
  );

  const toggleEvent = (id: string) => {
    setPool((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const toggleGroup = (groupEvents: ReadonlyArray<GalacticEvent>) => {
    const ids = groupEvents.map((event) => event.id);
    const allIn = ids.every((id) => poolSet.has(id));

    setPool((prev) =>
      allIn
        ? prev.filter((id) => !ids.includes(id))
        : Array.from(new Set([...prev, ...ids])),
    );
  };

  const onDraw = (event: SubmitEvent) => {
    event.preventDefault();
    const count = Math.min(Math.max(1, drawCount), pool.length);
    setDrawnIds(shuffleArray([...pool]).slice(0, count));
    setCopied(false);
  };

  const onShare = async () => {
    const params = new URLSearchParams({
      pool: pool.join(','),
      drawn: drawnIds.join(','),
    });

    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Page>
      <form onSubmit={onDraw}>
        {eventsBySource.map(({ source, events }) => (
          <fieldset key={source}>
            <legend>
              <label>
                <input
                  type='checkbox'
                  checked={events.every((event) => poolSet.has(event.id))}
                  onChange={() => toggleGroup(events)}
                />
                <strong>{source}</strong>
              </label>
            </legend>
            {events.map((event) => (
              <label key={event.id}>
                <input
                  type='checkbox'
                  checked={poolSet.has(event.id)}
                  onChange={() => toggleEvent(event.id)}
                />
                {event.name} <small>(complexity {event.complexity})</small>
              </label>
            ))}
          </fieldset>
        ))}
        <label>
          Draw
          <input
            type='number'
            min={1}
            max={Math.max(1, pool.length)}
            value={drawCount}
            onChange={(event) =>
              setDrawCount(
                Math.min(
                  Math.max(1, Number(event.target.value) || 1),
                  Math.max(1, pool.length),
                ),
              )
            }
          />
        </label>
        <button type='submit' disabled={pool.length === 0}>
          Draw events
        </button>
      </form>

      {drawnEvents.length > 0 && (
        <>
          <ul>
            {drawnEvents.map((event) => (
              <li key={event.id}>
                <strong>{event.name}</strong> — complexity {event.complexity}
                <details>
                  <summary>Effect</summary>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{event.effect}</div>
                </details>
              </li>
            ))}
          </ul>
          <button type='button' onClick={onShare}>
            Share
          </button>
          {copied && <small role='status'>Copied</small>}
        </>
      )}
    </Page>
  );
}
