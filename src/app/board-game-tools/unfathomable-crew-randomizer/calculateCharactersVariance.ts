import { calculateVariance } from '@/utils/calculateVariance';
import { calculateCharactersTotals } from './calculateCharactersTotals';
import type { UnfathomableCharacter } from './UnfathomableCharacter';

export function calculateCharactersVariance(
  characters: Array<UnfathomableCharacter>,
): number {
  const totalsObject = calculateCharactersTotals(characters);
  const totalsArray = Object.values(totalsObject);

  return calculateVariance(totalsArray);
}
