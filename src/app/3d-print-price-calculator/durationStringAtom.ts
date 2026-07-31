import { atomWithStorage } from 'jotai/utils';

export const durationStringAtom = atomWithStorage<string>(
  'print-price-duration',
  '1h',
);
