import { fetchGame, type GameData } from './fetchGame';
import type { Cache } from '@/utils/createCache';

export async function fetchGames(
  ids: ReadonlyArray<string>,
  opts: {
    jsonCache: Cache<unknown>;
    textCache: Cache<string>;
    onProgress?: (done: number, total: number) => void;
  },
): Promise<{
  games: Map<string, GameData>;
  failedIds: ReadonlyArray<string>;
}> {
  const { jsonCache, textCache, onProgress } = opts;
  let done = 0;
  const total = ids.length;
  onProgress?.(done, total);

  const results = await Promise.all(
    ids.map((id) =>
      fetchGame(id, { jsonCache, textCache }).finally(() => {
        done++;
        onProgress?.(done, total);
      }),
    ),
  );

  const games = new Map<string, GameData>();
  const failedIds: Array<string> = [];

  for (let i = 0; i < results.length; i++) {
    const [data] = results[i]!;
    const id = ids[i]!;
    if (data) games.set(id, data);
    else failedIds.push(id);
  }

  return { games, failedIds };
}
