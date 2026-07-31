import { atomWithStorage } from 'jotai/utils';
import { allCharacterNames } from './allCharacterNames';

export const poolAtom = atomWithStorage<Array<string>>(
  'unfathomable-crew-randomizer-character-pool',
  allCharacterNames,
);
