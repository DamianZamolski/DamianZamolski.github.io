import type { FetchJson } from '@/components/FetchJson';
import type { ValueOrError } from '@/utils/ValueOrError';
import type { Deck } from './Deck';
import { deckSchema } from './deckSchema';

export async function fetchDeck(
  apiUrl: string,
  fetchJson: FetchJson,
): Promise<ValueOrError<Deck>> {
  const [raw, err] = await fetchJson(apiUrl);
  if (err) return [null, err];

  const parsed = deckSchema.safeParse(raw);
  if (!parsed.success) return [null, 'invalid deck data'];

  return [parsed.data, null];
}
