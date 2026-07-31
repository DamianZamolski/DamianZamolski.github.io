import { atomWithStorage } from 'jotai/utils';

export const markupAtom = atomWithStorage<number>('print-price-markup', 100);
