import { atomWithStorage } from 'jotai/utils';

export const playersTextAtom = atomWithStorage<string>(
  'teams-randomizer-players',
  '',
);
