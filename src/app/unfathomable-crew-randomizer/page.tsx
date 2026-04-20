'use client';
import { calculateCharactersTotals } from './calculateCharactersTotals';
import { calculateCharactersVariance } from './calculateCharactersVariance';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import { emptyCharacter } from './emptyCharacter';
import { shuffleArray } from '@/utils/shuffleArray';
import { UnfathomableCharacter } from './UnfathomableCharacter';
import { unfathomableCharacters } from './unfathomableCharacters';
import styles from './styles.module.css';
import { Page } from '@/components/Page';

export default function UnfathomableCrewRandomizerPage() {
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

  const [resultCharacters, setResultCharacters] = useState<
    Array<UnfathomableCharacter>
  >([]);

  const captain = useMemo(
    () =>
      resultCharacters.reduce(
        (result, character) =>
          character.captain < result.captain ? character : result,
        { name: '', captain: 100 },
      ),
    [resultCharacters],
  );

  const keeperOfTheTome = useMemo(
    () =>
      resultCharacters.reduce(
        (result, character) =>
          character.keeperOfTheTome < result.keeperOfTheTome
            ? character
            : result,
        { name: '', keeperOfTheTome: 100 },
      ),
    [resultCharacters],
  );

  const titlesMap = useMemo(
    () => ({
      [captain.name]: 'Captain',
      [keeperOfTheTome.name]: 'Keeper of The Tome',
    }),
    [captain.name, keeperOfTheTome.name],
  );

  const totals = useMemo(
    () => calculateCharactersTotals(resultCharacters),
    [resultCharacters],
  );

  const onPlayerCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPlayerCount(Number(event.target.value));
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
    let newCharacters: Array<UnfathomableCharacter>;
    let newVariance: number;

    do {
      newCharacters = shuffleArray(charactersPool).slice(0, playerCount);
      newVariance = calculateCharactersVariance(newCharacters);
    } while (newVariance > 0.5);

    setResultCharacters(newCharacters);
  }, [charactersPool, playerCount]);

  return (
    <Page title='Unfathomable Crew Randomizer'>
      <form>
        <fieldset>
          <fieldset>
            <legend>Player Count</legend>
            {[3, 4, 5, 6].map((value) => (
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
              <th scope='col'>Name</th>
              <th scope='col'>Title</th>
              <th scope='col'>Influence</th>
              <th scope='col'>Lore</th>
              <th scope='col'>Perception</th>
              <th scope='col'>Strength</th>
              <th scope='col'>Will</th>
            </tr>
          </thead>
          <tbody>
            {resultCharacters.map((character) => (
              <tr key={character.name}>
                <th scope='row'>{character.name}</th>
                <td>{titlesMap[character.name] ?? emptyCharacter}</td>
                <td className={styles.center}>
                  {character.influence ?? emptyCharacter}
                </td>
                <td className={styles.center}>
                  {character.lore ?? emptyCharacter}
                </td>
                <td className={styles.center}>
                  {character.perception ?? emptyCharacter}
                </td>
                <td className={styles.center}>
                  {character.strength ?? emptyCharacter}
                </td>
                <td className={styles.center}>
                  {character.will ?? emptyCharacter}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope='row' colSpan={2}>
                Total
              </th>
              <td className={styles.center}>{totals.influence}</td>
              <td className={styles.center}>{totals.lore}</td>
              <td className={styles.center}>{totals.perception}</td>
              <td className={styles.center}>{totals.strength}</td>
              <td className={styles.center}>{totals.will}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </Page>
  );
}
