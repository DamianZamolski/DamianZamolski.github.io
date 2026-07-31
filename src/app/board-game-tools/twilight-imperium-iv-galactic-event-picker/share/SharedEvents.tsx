import { useSearchParams } from 'next/navigation';
import { ShareButton } from '@/components/ShareButton';
import type { GalacticEvent } from '../GalacticEvent';
import { galacticEvents } from '../galacticEvents';
import { EventEffect } from './EventEffect';

export function SharedEvents() {
  const eventsParam = useSearchParams().get('events');

  const drawnEvents = (eventsParam ?? '')
    .split(',')
    .map((id) => galacticEvents.find((event) => event.id === id))
    .filter((event): event is GalacticEvent => Boolean(event));

  if (drawnEvents.length === 0) {
    return <p>No events drawn.</p>;
  }

  return (
    <>
      {drawnEvents.map((event) => (
        <article key={event.id}>
          <header>
            <strong>{event.name}</strong>{' '}
            <small>(complexity {event.complexity})</small>
          </header>
          <EventEffect effect={event.effect} />
        </article>
      ))}
      <ShareButton />
    </>
  );
}
