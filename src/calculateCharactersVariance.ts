import { Character } from './app/unfathomable/Character';
import { calculateCharactersTotals } from './calculateCharactersTotals';
import { calculateVariance } from './calculateVariance';

export function calculateCharactersVariance(
  characters: ReadonlyArray<Character>,
): number {
  const totalsObject = calculateCharactersTotals(characters);
  const totalsArray = Object.values(totalsObject);
  return calculateVariance(totalsArray);
}
