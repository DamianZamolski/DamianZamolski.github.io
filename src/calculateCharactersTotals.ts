import { Character } from './app/unfathomable/Character';

export function calculateCharactersTotals(
  characters: ReadonlyArray<Character>,
) {
  return characters.reduce(
    (totals, char) => ({
      wplyw: totals.wplyw + (char.wplyw ?? 0),
      wiedza: totals.wiedza + (char.wiedza ?? 0),
      percepcja: totals.percepcja + (char.percepcja ?? 0),
      sila: totals.sila + (char.sila ?? 0),
      wola: totals.wola + (char.wola ?? 0),
    }),
    { wplyw: 0, wiedza: 0, percepcja: 0, sila: 0, wola: 0 },
  );
}
