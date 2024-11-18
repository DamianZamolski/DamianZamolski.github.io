import { UnfathomableCharacter } from './UnfathomableCharacter';

export function calculateCharactersTotals(
  characters: ReadonlyArray<UnfathomableCharacter>,
) {
  return characters.reduce(
    (totals, character) => {
      totals.wplyw += character.wplyw ?? 0;
      totals.wiedza += character.wiedza ?? 0;
      totals.percepcja += character.percepcja ?? 0;
      totals.sila += character.sila ?? 0;
      totals.wola += character.wola ?? 0;

      return totals;
    },
    { wplyw: 0, wiedza: 0, percepcja: 0, sila: 0, wola: 0 },
  );
}
