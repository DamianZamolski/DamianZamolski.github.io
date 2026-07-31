import type { GalacticEvent } from '../GalacticEvent';

export function EventEffect({ effect }: { effect: GalacticEvent['effect'] }) {
  if (typeof effect !== 'string') {
    return effect;
  }

  return effect
    .split('\n\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
}
