import type { FetchJson } from '@/components/FetchJson';
import type { ValueOrError } from '@/utils/ValueOrError';
import type { Deck } from './Deck';
import { deckSchema } from './deckSchema';

export async function fetchDeck(
  deckId: string,
  fetchJson: FetchJson,
): Promise<ValueOrError<Deck>> {
  const [raw, err] = await fetchJson(
    `https://arkhamdb.com/api/public/deck/${deckId}`,
  );

  if (err) return [null, err];

  const parsed = deckSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid deck data'];

  return [parsed.data, null];
}
