import { atomWithStorage } from 'jotai/utils';
import { allEventIds } from './allEventIds';

export const poolAtom = atomWithStorage<Array<string>>(
  'ti4-galactic-event-pool',
  allEventIds,
);
