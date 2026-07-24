'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { usePathname, useRouter } from 'next/navigation';
import { type SubmitEvent, useMemo, useState } from 'react';
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

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
} as const;

export default function TwilightImperiumIvGalacticEventPickerPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [pool, setPool] = useAtom(poolAtom);
  const [drawCount, setDrawCount] = useState(1);

  const poolSet = useMemo(() => new Set(pool), [pool]);

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
    const drawnIds = shuffleArray([...pool]).slice(0, count);
    router.push(`${pathname}/drawn?drawn=${drawnIds.join(',')}`);
  };

  return (
    <Page>
      <form onSubmit={onDraw}>
        <details>
          <summary>Event pool ({pool.length} selected)</summary>
          {eventsBySource.map(({ source, events }) => (
            <fieldset key={source}>
              <legend>
                <label style={rowStyle}>
                  <input
                    type='checkbox'
                    style={{ margin: 0 }}
                    checked={events.every((event) => poolSet.has(event.id))}
                    onChange={() => toggleGroup(events)}
                  />
                  <strong>{source}</strong>
                </label>
              </legend>
              {events.map((event) => (
                <label key={event.id} style={rowStyle}>
                  <input
                    type='checkbox'
                    style={{ margin: 0 }}
                    checked={poolSet.has(event.id)}
                    onChange={() => toggleEvent(event.id)}
                  />
                  <span>
                    {event.name} <small>(complexity {event.complexity})</small>
                  </span>
                </label>
              ))}
            </fieldset>
          ))}
        </details>
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
    </Page>
  );
}
