import { atomWithStorage } from 'jotai/utils';

export const playerCountAtom = atomWithStorage(
  'unfathomable-crew-randomizer-player-count',
  3,
);
