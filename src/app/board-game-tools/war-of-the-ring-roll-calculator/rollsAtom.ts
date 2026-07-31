import { atomWithStorage } from 'jotai/utils';

export const rollsAtom = atomWithStorage<number>('wotr-rolls', 5);
