'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Page } from '@/components/Page';
import { type GalacticEvent, galacticEvents } from '../events';

function EventEffect({ effect }: { effect: GalacticEvent['effect'] }) {
  if (typeof effect !== 'string') {
    return effect;
  }

  return effect
    .split('\n\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

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
      <EventEffect effect={event.effect} />
    </article>
  ));
}

export default function DrawnEventsPage() {
  return (
    <Page>
      <Suspense>
        <DrawnEvents />
      </Suspense>
    </Page>
  );
}
