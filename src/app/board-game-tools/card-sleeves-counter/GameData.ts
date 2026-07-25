import type { CardSet } from './CardSet';

export interface GameData {
  name: string | null;
  cardSets: ReadonlyArray<CardSet>;
}
