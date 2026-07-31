import type { GameData } from './GameData';

export type Status =
  | { kind: 'idle' }
  | { kind: 'fetching-games'; done: number; total: number }
  | {
      kind: 'results';
      games: Map<string, GameData>;
      failedIds: ReadonlyArray<string>;
    }
  | { kind: 'error'; message: string; ids?: ReadonlyArray<string> };
