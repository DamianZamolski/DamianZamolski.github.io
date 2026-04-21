import { atomWithStorage } from 'jotai/utils';

export const cardHeightAtom = atomWithStorage<number>('card-height', 88);
