import type { BuildContext } from '@/components/BuildContext';
import type { ProxyBuild } from '@/components/ProxyBuild';
import type { ProxyWarning } from '@/components/ProxyWarning';
import type { Card } from './Card';
import type { Deck } from './Deck';
import { fetchCard } from './fetchCard';
import { fetchDeck } from './fetchDeck';

export async function buildImageLinks(
  deckIds: Array<string>,
  { fetchJson, report }: BuildContext,
): Promise<ProxyBuild> {
  report(`Fetching ${deckIds.length} deck(s)…`);

  const uniqueDeckIds = Array.from(new Set(deckIds));

  const deckResults = await Promise.all(
    uniqueDeckIds.map((id) => fetchDeck(id, fetchJson)),
  );

  const deckCache = new Map<string, Deck>();
  const failedDecks: Array<string> = [];

  for (let i = 0; i < deckResults.length; i++) {
    const [deck] = deckResults[i]!;
    const id = uniqueDeckIds[i]!;
    if (deck) deckCache.set(id, deck);
    else failedDecks.push(`https://arkhamdb.com/deck/view/${id}`);
  }

  if (deckCache.size === 0) {
    return {
      imageLinks: [],
      emptyError: { message: 'All decks failed to fetch:', urls: failedDecks },
    };
  }

  const instanceCodes: Array<string> = [];

  for (const id of deckIds) {
    const deck = deckCache.get(id);
    if (!deck) continue;

    instanceCodes.push(deck.investigator_code);

    for (const [code, qty] of Object.entries(deck.slots)) {
      for (let i = 0; i < qty; i++) instanceCodes.push(code);
    }

    if (deck.sideSlots && !Array.isArray(deck.sideSlots)) {
      for (const [code, qty] of Object.entries(deck.sideSlots)) {
        for (let i = 0; i < qty; i++) instanceCodes.push(code);
      }
    }
  }

  const uniqueMainCodes = Array.from(new Set(instanceCodes));
  const cardCache = new Map<string, Card>();
  const failedCards: Array<string> = [];

  report('Fetching card', 0, uniqueMainCodes.length);

  let cardsDone = 0;

  const mainCardResults = await Promise.all(
    uniqueMainCodes.map((code) =>
      fetchCard(code, fetchJson).finally(() => {
        cardsDone++;
        report('Fetching card', cardsDone, uniqueMainCodes.length);
      }),
    ),
  );

  for (let i = 0; i < mainCardResults.length; i++) {
    const [card] = mainCardResults[i]!;
    const code = uniqueMainCodes[i]!;
    if (card) cardCache.set(code, card);
    else failedCards.push(code);
  }

  const bondedExtras: Array<string> = [];

  for (const card of cardCache.values()) {
    for (const bonded of card.bonded_cards ?? []) {
      for (let i = 0; i < bonded.count; i++) {
        bondedExtras.push(bonded.code);
      }
    }
  }

  instanceCodes.push(...bondedExtras);

  const uniqueBondedCodes = Array.from(new Set(bondedExtras)).filter(
    (code) => !cardCache.has(code),
  );

  if (uniqueBondedCodes.length > 0) {
    const bondedResults = await Promise.all(
      uniqueBondedCodes.map((code) => fetchCard(code, fetchJson)),
    );

    for (let i = 0; i < bondedResults.length; i++) {
      const [card] = bondedResults[i]!;
      const code = uniqueBondedCodes[i]!;
      if (card) cardCache.set(code, card);
      else failedCards.push(code);
    }
  }

  const imageLinks: Array<string> = [];

  for (const code of instanceCodes) {
    const card = cardCache.get(code);
    if (!card?.imagesrc) continue;

    imageLinks.push(`https://arkhamdb.com${card.imagesrc}`);

    if (card.double_sided && card.backimagesrc) {
      imageLinks.push(`https://arkhamdb.com${card.backimagesrc}`);
    }
  }

  if (imageLinks.length === 0) {
    return {
      imageLinks: [],
      emptyError: {
        message: 'No card images available to download.',
        urls: Array.from(new Set(failedCards)),
      },
    };
  }

  const warnings: Array<ProxyWarning> = [];

  if (failedDecks.length > 0) {
    warnings.push({ label: 'deck(s) failed to fetch', items: failedDecks });
  }

  if (failedCards.length > 0) {
    warnings.push({
      label: 'card(s) failed to fetch',
      items: Array.from(new Set(failedCards)),
    });
  }

  return { imageLinks, warnings };
}
