import { atomWithStorage } from 'jotai/utils';

export const materialWeightAtom = atomWithStorage<number>(
  'print-price-material-weight',
  1000,
);
