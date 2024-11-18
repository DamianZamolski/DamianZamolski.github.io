'use client';
import type { Character } from './Character';
import { calculateCharactersVariance } from '@/calculateCharactersVariance';
import { ChangeEvent, useCallback, useState } from 'react';
import { shuffleArray } from '@/shuffleArray';
import { unfathomableCharacters } from './characters';
import { calculateCharactersTotals } from '@/calculateCharactersTotals';
import { clamp } from '@/clamp';

export default function UnfathomablePage() {
  const [playerCount, setPlayerCount] = useState(6);
  const [varianceThreshold, setVarianceThreshold] = useState(2);
  const [characters, setCharacters] = useState<ReadonlyArray<Character>>([]);
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

  const onPickClick = useCallback(() => {
    let newCharacters = [];
    let newVariance = 0;

    do {
      newCharacters = shuffleArray(unfathomableCharacters)
        .slice(0, playerCount)
        .sort((a, b) => a.name.localeCompare(b.name));
      newVariance = calculateCharactersVariance(newCharacters);
    } while (newVariance > varianceThreshold);

    setCharacters(newCharacters);
    setVariance(newVariance);
  }, [playerCount, varianceThreshold]);

  const totals = calculateCharactersTotals(characters);

  return (
    <main>
      <header>
        <h1>Unfathomable</h1>
      </header>
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
      <button onClick={onPickClick}>Pick</button>
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
          {characters.map((character) => (
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
    </main>
  );
}
