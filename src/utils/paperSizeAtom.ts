import { atomWithStorage } from 'jotai/utils';

export type PaperSize = 'a4' | 'letter';

export const paperSizeAtom = atomWithStorage<PaperSize>('paper-size', 'a4');
