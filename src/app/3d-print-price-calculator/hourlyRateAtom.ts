import { atomWithStorage } from 'jotai/utils';

export const hourlyRateAtom = atomWithStorage<number>(
  'print-price-hourly-rate',
  0.5,
);
