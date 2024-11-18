'use client';
import { ChangeEvent, useCallback, useMemo, useState, MouseEvent } from 'react';
import { UnfathomableCharacter } from './UnfathomableCharacter';
import { clamp } from '@/utils/clamp';
import { shuffleArray } from '@/utils/shuffleArray';
import { unfathomableCharacters } from './unfathomableCharacters';
import { calculateCharactersVariance } from './calculateCharactersVariance';
import { calculateCharactersTotals } from './calculateCharactersTotals';

export default function UnfathomablePage() {
  const [playerCount, setPlayerCount] = useState(6);

  const [
    shouldIncludeFromTheAbyssCharacters,
    setShouldIncludeFromTheAbyssCharacters,
  ] = useState(true);

  const charactersPool = useMemo(
    () =>
      shouldIncludeFromTheAbyssCharacters
        ? unfathomableCharacters
        : unfathomableCharacters.filter(
            (character) => character.expansion !== 'from-the-abyss',
          ),
    [shouldIncludeFromTheAbyssCharacters],
  );

  const [varianceThreshold, setVarianceThreshold] = useState(2);

  const [resultCharacters, setResultCharacters] = useState<
    ReadonlyArray<UnfathomableCharacter>
  >([]);

  const captain = resultCharacters.reduce(
    (captain, character) =>
      character.captain < captain.captain ? character : captain,
    { name: '', captain: 100 },
  );

  const keeperOfTheTome = resultCharacters.reduce(
    (keeperOfTheTome, character) =>
      character.keeperOfTheTome < keeperOfTheTome.keeperOfTheTome
        ? character
        : keeperOfTheTome,
    { name: '', keeperOfTheTome: 100 },
  );

  const titlesMap = {
    [captain.name]: 'Captain',
    [keeperOfTheTome.name]: 'Keeper of The Tome',
  };

  const totals = calculateCharactersTotals(resultCharacters);
  const [variance, setVariance] = useState(0);

  const onPlayerCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPlayerCount(clamp(Number(event.target.value), 3, 6));
    },
    [],
  );

  const onVarianceThresholdChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let newValue = Number(event.target.value);
      if (newValue < 0) newValue = 0;
      setVarianceThreshold(newValue);
    },
    [],
  );

  const onShouldIncludeFromTheAbyssCharactersChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setShouldIncludeFromTheAbyssCharacters(event.target.checked);
    },
    [],
  );

  const onRandomizeClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      let newCharacters = [];
      let newVariance = 0;

      do {
        newCharacters = shuffleArray(charactersPool)
          .slice(0, playerCount)
          .sort((a, b) => a.name.localeCompare(b.name));

        newVariance = calculateCharactersVariance(newCharacters);
      } while (newVariance > varianceThreshold);

      setResultCharacters(newCharacters);
      setVariance(newVariance);
    },
    [charactersPool, playerCount, varianceThreshold],
  );

  return (
    <main>
      <header>
        <h1>Unfathomable Crew Randomizer</h1>
      </header>
      <form>
        <fieldset>
          <label>
            Player Count
            <input
              type='number'
              min={3}
              max={6}
              value={playerCount}
              onChange={onPlayerCountChange}
            />
          </label>
          <label>
            Variance Threshold
            <input
              type='number'
              min={0}
              step={0.1}
              value={varianceThreshold}
              onChange={onVarianceThresholdChange}
            />
          </label>
          <label>
            <input
              type='checkbox'
              checked={shouldIncludeFromTheAbyssCharacters}
              onChange={onShouldIncludeFromTheAbyssCharactersChange}
            />
            Include From The Abyss Characters
          </label>
        </fieldset>
        <button type='submit' onClick={onRandomizeClick}>
          Randomize
        </button>
      </form>
      {resultCharacters.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Influence</th>
              <th>Lore</th>
              <th>Perception</th>
              <th>Strength</th>
              <th>Will</th>
            </tr>
          </thead>
          <tbody>
            {resultCharacters.map((character) => (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{titlesMap[character.name] ?? '-'}</td>
                <td>{character.influence ?? '-'}</td>
                <td>{character.lore ?? '-'}</td>
                <td>{character.perception ?? '-'}</td>
                <td>{character.strength ?? '-'}</td>
                <td>{character.will ?? '-'}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total</td>
              <td>{totals.influence}</td>
              <td>{totals.lore}</td>
              <td>{totals.perception}</td>
              <td>{totals.strength}</td>
              <td>{totals.will}</td>
            </tr>
            <tr>
              <td>Variance</td>
              <td colSpan={6}>{variance.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </main>
  );
}
