'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Page } from '@/components/Page';
import { type GalacticEvent, galacticEvents } from '../events';

function DrawnEvents() {
  const drawnParam = useSearchParams().get('drawn');

  const drawnEvents = (drawnParam ?? '')
    .split(',')
    .map((id) => galacticEvents.find((event) => event.id === id))
    .filter((event): event is GalacticEvent => Boolean(event));

  if (drawnEvents.length === 0) {
    return <p>No events drawn.</p>;
  }

  return drawnEvents.map((event) => (
    <article key={event.id}>
      <header>
        <strong>{event.name}</strong>{' '}
        <small>(complexity {event.complexity})</small>
      </header>
      <div style={{ whiteSpace: 'pre-wrap' }}>{event.effect}</div>
    </article>
  ));
}

export default function DrawnEventsPage() {
  return (
    <Page>
      <Suspense>
        <DrawnEvents />
      </Suspense>
      <Link href='/board-game-tools/twilight-imperium-iv-galactic-event-picker'>
        Draw again
      </Link>
    </Page>
  );
}
