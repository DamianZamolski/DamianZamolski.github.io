import { atomWithStorage } from 'jotai/utils';

export const rollSuccessValueAtom = atomWithStorage<number>(
  'wotr-roll-success-value',
  6,
);
