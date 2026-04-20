import { atomWithStorage } from 'jotai/utils';

export const cardWidthAtom = atomWithStorage<number>('card-width', 62);
export const cardHeightAtom = atomWithStorage<number>('card-height', 88);
