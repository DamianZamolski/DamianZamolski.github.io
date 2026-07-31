import { atomWithStorage } from 'jotai/utils';

export const rerollSuccessValueAtom = atomWithStorage<number>(
  'wotr-reroll-success-value',
  6,
);
