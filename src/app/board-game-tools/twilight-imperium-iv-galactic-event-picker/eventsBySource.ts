import { galacticEvents } from './galacticEvents';

export const eventsBySource = Array.from(
  new Set(galacticEvents.map((event) => event.source)),
).map((source) => ({
  source,
  events: galacticEvents.filter((event) => event.source === source),
}));
