import { atomWithStorage } from 'jotai/utils';

export const materialCostPerUnitAtom = atomWithStorage<number>(
  'print-price-material-cost-per-unit',
  40,
);
