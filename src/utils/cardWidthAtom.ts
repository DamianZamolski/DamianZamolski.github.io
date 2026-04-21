import { atomWithStorage } from 'jotai/utils';

export const cardWidthAtom = atomWithStorage<number>('card-width', 62);
