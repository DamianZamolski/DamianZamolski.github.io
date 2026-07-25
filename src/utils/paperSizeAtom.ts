import { atomWithStorage } from 'jotai/utils';
import type { PaperSize } from './PaperSize';

export const paperSizeAtom = atomWithStorage<PaperSize>('paper-size', 'a4');
