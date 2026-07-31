import type { WritableAtom } from 'jotai';

export type TextAtom = WritableAtom<
  string,
  [string | ((prev: string) => string)],
  void
>;
