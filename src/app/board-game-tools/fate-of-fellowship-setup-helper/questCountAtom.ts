import { atomWithStorage } from 'jotai/utils';

export const questCountAtom = atomWithStorage(
  'fate-of-fellowship-quest-count',
  5,
);
