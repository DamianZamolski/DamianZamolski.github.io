export interface Cache<T> {
  get(url: string): T | undefined;
  set(url: string, value: T): void;
  clear(): void;
}
