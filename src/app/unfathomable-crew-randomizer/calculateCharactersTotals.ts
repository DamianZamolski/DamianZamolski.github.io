import { UnfathomableCharacter } from './UnfathomableCharacter';

export function calculateCharactersTotals(
  characters: ReadonlyArray<UnfathomableCharacter>,
) {
  return characters.reduce(
    (result, character) => {
      result.influence += character.influence ?? 0;
      result.lore += character.lore ?? 0;
      result.perception += character.perception ?? 0;
      result.strength += character.strength ?? 0;
      result.will += character.will ?? 0;

      return result;
    },
    { influence: 0, lore: 0, perception: 0, strength: 0, will: 0 },
  );
}
