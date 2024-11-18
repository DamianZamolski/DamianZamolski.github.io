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

  const [varianceThreshold, setVarianceThreshold] = useState(2);

  const [resultCharacters, setResultCharacters] = useState<
    ReadonlyArray<UnfathomableCharacter>
  >([]);

  const [variance, setVariance] = useState(0);

  const charactersPool = useMemo(
    () =>
      shouldIncludeFromTheAbyssCharacters
        ? unfathomableCharacters
        : unfathomableCharacters.filter(
            (character) => character.expansion !== 'from-the-abyss',
          ),
    [shouldIncludeFromTheAbyssCharacters],
  );

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

  const onPickClick = useCallback(
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

  const totals = calculateCharactersTotals(resultCharacters);

  return (
    <main>
      <header>
        <h1>Unfathomable</h1>
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
        <button type='submit' onClick={onPickClick}>
          Pick
        </button>
      </form>
      {resultCharacters.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Wpływ</th>
              <th>Wiedza</th>
              <th>Percepcja</th>
              <th>Siła</th>
              <th>Wola</th>
            </tr>
          </thead>
          <tbody>
            {resultCharacters.map((character) => (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.wplyw ?? '-'}</td>
                <td>{character.wiedza ?? '-'}</td>
                <td>{character.percepcja ?? '-'}</td>
                <td>{character.sila ?? '-'}</td>
                <td>{character.wola ?? '-'}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totals.wplyw}</td>
              <td>{totals.wiedza}</td>
              <td>{totals.percepcja}</td>
              <td>{totals.sila}</td>
              <td>{totals.wola}</td>
            </tr>
            <tr>
              <td>Variance</td>
              <td colSpan={5}>{variance.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </main>
  );
}
