import type { ProxyWarning } from './ProxyWarning';

export type ProxyBuild = {
  imageLinks: ReadonlyArray<string>;
  warnings?: ReadonlyArray<ProxyWarning>;
  emptyError?: { message: string; urls?: ReadonlyArray<string> };
};
