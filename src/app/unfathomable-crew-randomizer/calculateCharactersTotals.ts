import { UnfathomableCharacter } from './UnfathomableCharacter';

export function calculateCharactersTotals(
  characters: ReadonlyArray<UnfathomableCharacter>,
) {
  return characters.reduce(
    (totals, character) => {
      totals.influence += character.influence ?? 0;
      totals.lore += character.lore ?? 0;
      totals.perception += character.perception ?? 0;
      totals.strength += character.strength ?? 0;
      totals.will += character.will ?? 0;

      return totals;
    },
    { influence: 0, lore: 0, perception: 0, strength: 0, will: 0 },
  );
}
