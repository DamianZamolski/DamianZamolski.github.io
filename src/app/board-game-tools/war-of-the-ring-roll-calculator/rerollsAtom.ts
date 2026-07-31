import { atomWithStorage } from 'jotai/utils';

export const rerollsAtom = atomWithStorage<number>('wotr-rerolls', 0);
