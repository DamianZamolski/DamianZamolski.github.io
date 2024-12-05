'use client';
import { calculateCharactersTotals } from './calculateCharactersTotals';
import { calculateCharactersVariance } from './calculateCharactersVariance';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import { emptyCharacter } from './emptyCharacter';
import { shuffleArray } from '@/utils/shuffleArray';
import { UnfathomableCharacter } from './UnfathomableCharacter';
import { unfathomableCharacters } from './unfathomableCharacters';

export default function Page() {
  const [playerCount, setPlayerCount] = useState(3);

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

  const [maxVariance, setMaxVariance] = useState(0.5);

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
      setPlayerCount(Number(event.target.value));
    },
    [],
  );

  const onMaxVarianceChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let newValue = Number(event.target.value);
      if (newValue < 0.5) newValue = 0.5;
      setMaxVariance(newValue);
    },
    [],
  );

  const onShouldIncludeFromTheAbyssCharactersChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setShouldIncludeFromTheAbyssCharacters(event.target.checked);
    },
    [],
  );

  const onRandomizeClick = useCallback(() => {
    let newCharacters: ReadonlyArray<UnfathomableCharacter>;
    let newVariance: number;

    do {
      newCharacters = shuffleArray(charactersPool)
        .slice(0, playerCount)
        .sort((a, b) => a.name.localeCompare(b.name));

      newVariance = calculateCharactersVariance(newCharacters);
    } while (newVariance > maxVariance);

    setResultCharacters(newCharacters);
    setVariance(newVariance);
  }, [charactersPool, playerCount, maxVariance]);

  return (
    <main>
      <header>
        <h1>Unfathomable Crew Randomizer</h1>
      </header>
      <form>
        <fieldset>
          <fieldset>
            <legend>Player Count</legend>
            {Array.from({ length: 4 }, (_, i) => i + 3).map((value) => (
              <Fragment key={value}>
                <input
                  id={`player-count-${value}`}
                  type='radio'
                  value={value}
                  checked={playerCount === value}
                  onChange={onPlayerCountChange}
                />
                <label htmlFor={`player-count-${value}`}>{value}</label>
              </Fragment>
            ))}
          </fieldset>
          <label>
            Max Variance
            <input
              type='number'
              min={0}
              step={0.5}
              value={maxVariance}
              onChange={onMaxVarianceChange}
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
        <input type='button' value='Randomize' onClick={onRandomizeClick} />
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
                <td>{titlesMap[character.name] ?? emptyCharacter}</td>
                <td>{character.influence ?? emptyCharacter}</td>
                <td>{character.lore ?? emptyCharacter}</td>
                <td>{character.perception ?? emptyCharacter}</td>
                <td>{character.strength ?? emptyCharacter}</td>
                <td>{character.will ?? emptyCharacter}</td>
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
              <td colSpan={6}>{variance}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </main>
  );
}
