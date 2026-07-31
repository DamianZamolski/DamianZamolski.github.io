import { atomWithStorage } from 'jotai/utils';

export const playerCountAtom = atomWithStorage(
  'fate-of-fellowship-player-count',
  4,
);
