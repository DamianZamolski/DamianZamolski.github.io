import { z } from 'zod';
import { cardSetSchema } from './cardSetSchema';
import { http } from '@/utils/http';
import type { Cache } from '@/utils/createCache';
import type { ValueOrError } from '@/utils/ValueOrError';

const cardSetsResponseSchema = z.object({
  cardSets: z.array(cardSetSchema),
});

export type CardSet = z.infer<typeof cardSetSchema>;

export interface GameData {
  name: string | null;
  cardSets: ReadonlyArray<CardSet>;
}

const cardSetsUrl = (id: string) =>
  `https://api.geekdo.com/api/cardsetsbygame?objectid=${id}`;

const gameInfoUrl = (id: string) =>
  `https://boardgamegeek.com/xmlapi2/thing?id=${id}`;

async function fetchJsonWithRetry(
  url: string,
  cache: Cache<unknown>,
): Promise<ValueOrError<unknown>> {
  const cached = cache.get(url);
  if (cached !== undefined) return [cached, null];

  const attempt = async (): Promise<ValueOrError<unknown>> => {
    try {
      const response = await http.get<unknown>(url);

      return [response.data, null];
    } catch {
      return [null, 'fetch failed'];
    }
  };

  let result = await attempt();
  if (result[1]) result = await attempt();

  if (result[0] !== null) cache.set(url, result[0]);

  return result;
}

async function fetchTextWithRetry(
  url: string,
  cache: Cache<string>,
): Promise<ValueOrError<string>> {
  const cached = cache.get(url);
  if (cached !== undefined) return [cached, null];

  const attempt = async (): Promise<ValueOrError<string>> => {
    try {
      const response = await http.get<string>(url, { responseType: 'text' });

      return [response.data, null];
    } catch {
      return [null, 'fetch failed'];
    }
  };

  let result = await attempt();
  if (result[1]) result = await attempt();

  if (result[0] !== null) cache.set(url, result[0]);

  return result;
}

function parsePrimaryName(xml: string): string | null {
  if (typeof DOMParser === 'undefined') return null;
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  const nameEl = doc.querySelector('name[type="primary"]');

  return nameEl?.getAttribute('value') ?? null;
}

export async function fetchGame(
  id: string,
  opts: {
    jsonCache: Cache<unknown>;
    textCache: Cache<string>;
  },
): Promise<ValueOrError<GameData>> {
  const [cardSetsResult, gameInfoResult] = await Promise.all([
    fetchJsonWithRetry(cardSetsUrl(id), opts.jsonCache),
    fetchTextWithRetry(gameInfoUrl(id), opts.textCache),
  ]);

  const [cardSetsRaw, cardSetsErr] = cardSetsResult;
  if (cardSetsErr) return [null, cardSetsErr];

  const parsed = cardSetsResponseSchema.safeParse(cardSetsRaw);
  if (!parsed.success) return [null, 'invalid cardsets data'];

  const [xml] = gameInfoResult;
  const name = xml !== null ? parsePrimaryName(xml) : null;

  return [{ name, cardSets: parsed.data.cardSets }, null];
}
