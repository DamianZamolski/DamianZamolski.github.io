import { atomWithStorage } from 'jotai/utils';

export const teamsCountAtom = atomWithStorage<number>(
  'teams-randomizer-count',
  2,
);
