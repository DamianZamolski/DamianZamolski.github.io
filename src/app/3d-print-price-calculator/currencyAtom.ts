import { atomWithStorage } from 'jotai/utils';

export const currencyAtom = atomWithStorage<string>(
  'print-price-currency',
  'zł',
);
