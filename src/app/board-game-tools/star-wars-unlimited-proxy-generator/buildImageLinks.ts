import type { BuildContext } from '@/components/BuildContext';
import type { ProxyBuild } from '@/components/ProxyBuild';
import type { ProxyWarning } from '@/components/ProxyWarning';
import type { Deck } from './Deck';
import { fetchDeck } from './fetchDeck';
import { toImageUrl } from './toImageUrl';

export async function buildImageLinks(
  deckUrls: Array<string>,
  { fetchJson, report }: BuildContext,
): Promise<ProxyBuild> {
  report(`Fetching ${deckUrls.length} deck(s)…`);

  const uniqueUrls = Array.from(new Set(deckUrls));
  const apiUrlOf = (url: string) => url.replace('/deck/', '/api/deck/');

  const deckResults = await Promise.all(
    uniqueUrls.map((url) => fetchDeck(apiUrlOf(url), fetchJson)),
  );

  const deckCache = new Map<string, Deck>();
  const failedDecks: Array<string> = [];

  for (let i = 0; i < deckResults.length; i++) {
    const [deck] = deckResults[i]!;
    const url = uniqueUrls[i]!;
    if (deck) deckCache.set(url, deck);
    else failedDecks.push(url);
  }

  if (deckCache.size === 0) {
    return {
      imageLinks: [],
      emptyError: { message: 'All decks failed to fetch:', urls: failedDecks },
    };
  }

  const imageLinks: Array<string> = [];

  for (const url of deckUrls) {
    const deck = deckCache.get(url);
    if (!deck) continue;

    imageLinks.push(
      toImageUrl(deck.leader.defaultImagePath),
      toImageUrl(deck.leader.defaultImagePath.replace('.png', '-back.png')),
      toImageUrl(deck.leader.defaultImagePath.replace('.png', '-portrait.png')),
      toImageUrl(deck.base.defaultImagePath),
    );

    for (const card of deck.shuffledDeck) {
      const imageUrl = toImageUrl(card.card.defaultImagePath);
      imageLinks.push(imageUrl, imageUrl, imageUrl);
    }
  }

  const warnings: Array<ProxyWarning> = [];

  if (failedDecks.length > 0) {
    warnings.push({ label: 'deck(s) failed to fetch', items: failedDecks });
  }

  return { imageLinks, warnings };
}
