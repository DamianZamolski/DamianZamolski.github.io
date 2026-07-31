import type { FetchJson } from '@/components/FetchJson';
import type { ValueOrError } from '@/utils/ValueOrError';
import type { Card } from './Card';
import { cardSchema } from './cardSchema';

export async function fetchCard(
  code: string,
  fetchJson: FetchJson,
): Promise<ValueOrError<Card>> {
  const [raw, err] = await fetchJson(
    `https://arkhamdb.com/api/public/card/${code}.json`,
  );

  if (err) return [null, err];

  const parsed = cardSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid card data'];

  return [parsed.data, null];
}
