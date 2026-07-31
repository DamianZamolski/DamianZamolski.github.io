import { atomWithStorage } from 'jotai/utils';

export const drawCountAtom = atomWithStorage(
  'ti4-galactic-event-draw-count',
  1,
);
