export interface Cache<T> {
  get(url: string): T | undefined;
  set(url: string, value: T): void;
  clear(): void;
}

export function createCache<T>(prefix: string): Cache<T> {
  const keyOf = (url: string) => `${prefix}:${url}`;

  return {
    get(url: string): T | undefined {
      if (typeof localStorage === 'undefined') return undefined;
      const raw = localStorage.getItem(keyOf(url));
      if (raw === null) return undefined;

      try {
        return JSON.parse(raw) as T;
      } catch {
        return undefined;
      }
    },
    set(url: string, value: T): void {
      if (typeof localStorage === 'undefined') return;

      try {
        localStorage.setItem(keyOf(url), JSON.stringify(value));
      } catch {
        // Quota exceeded or storage unavailable — silently skip caching.
      }
    },
    clear(): void {
      if (typeof localStorage === 'undefined') return;
      const prefixWithColon = `${prefix}:`;
      const keysToRemove: Array<string> = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key !== null && key.startsWith(prefixWithColon)) {
          keysToRemove.push(key);
        }
      }

      for (const key of keysToRemove) localStorage.removeItem(key);
    },
  };
}
