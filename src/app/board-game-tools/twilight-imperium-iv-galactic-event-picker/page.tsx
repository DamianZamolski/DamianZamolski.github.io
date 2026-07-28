'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { usePathname, useRouter } from 'next/navigation';
import { type SubmitEvent, useMemo } from 'react';
import { Checkbox } from '@/components/Checkbox';
import { Page } from '@/components/Page';
import { shuffleArray } from '@/utils/shuffleArray';
import type { GalacticEvent } from './GalacticEvent';
import { galacticEvents } from './galacticEvents';
import { Form } from '@/components/Form';

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

const drawCountAtom = atomWithStorage('ti4-galactic-event-draw-count', 1);

export default function TwilightImperiumIvGalacticEventPickerPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [pool, setPool] = useAtom(poolAtom);
  const [drawCount, setDrawCount] = useAtom(drawCountAtom);

  const poolSet = useMemo(() => new Set(pool), [pool]);

  const effectiveDrawCount = Math.min(
    Math.max(1, drawCount),
    Math.max(1, pool.length),
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
    const drawnIds = shuffleArray([...pool]).slice(0, effectiveDrawCount);
    router.push(`${pathname}/share?events=${drawnIds.join(',')}`);
  };

  return (
    <Page>
      <Form onSubmit={onDraw}>
        <details>
          <summary>Event pool ({pool.length} selected)</summary>
          {eventsBySource.map(({ source, events }) => (
            <fieldset key={source}>
              <legend>
                <Checkbox
                  checked={events.every((event) => poolSet.has(event.id))}
                  onChange={() => toggleGroup(events)}
                >
                  <strong>{source}</strong>
                </Checkbox>
              </legend>
              {events.map((event) => (
                <Checkbox
                  key={event.id}
                  checked={poolSet.has(event.id)}
                  onChange={() => toggleEvent(event.id)}
                >
                  {event.name} <small>(complexity {event.complexity})</small>
                </Checkbox>
              ))}
            </fieldset>
          ))}
        </details>
        <label>
          Draw count
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
          Draw {effectiveDrawCount} event{effectiveDrawCount === 1 ? '' : 's'}
        </button>
      </Form>
    </Page>
  );
}
