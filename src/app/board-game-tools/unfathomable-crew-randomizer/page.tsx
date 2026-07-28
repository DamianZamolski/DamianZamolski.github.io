'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { calculateCharactersVariance } from './calculateCharactersVariance';
import {
  type ChangeEvent,
  Fragment,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { emptyCharacter } from './emptyCharacter';
import { shuffleArray } from '@/utils/shuffleArray';
import type { UnfathomableCharacter } from './UnfathomableCharacter';
import { unfathomableCharacters } from './unfathomableCharacters';
import { Page } from '@/components/Page';
import { Checkbox } from '@/components/Checkbox';
import { Form } from '@/components/Form';

const playerCountAtom = atomWithStorage(
  'unfathomable-crew-randomizer-player-count',
  3,
);

const shouldIncludeFromTheAbyssCharactersAtom = atomWithStorage(
  'unfathomable-crew-randomizer-include-from-the-abyss',
  true,
);

export default function UnfathomableCrewRandomizerPage() {
  const [playerCount, setPlayerCount] = useAtom(playerCountAtom);

  const [
    shouldIncludeFromTheAbyssCharacters,
    setShouldIncludeFromTheAbyssCharacters,
  ] = useAtom(shouldIncludeFromTheAbyssCharactersAtom);

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

  const onPlayerCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPlayerCount(Number(event.target.value));
    },
    [setPlayerCount],
  );

  const onRandomizeClick = () => {
    let newCharacters: Array<UnfathomableCharacter>;
    let newVariance: number;

    do {
      newCharacters = shuffleArray(charactersPool).slice(0, playerCount);
      newVariance = calculateCharactersVariance(newCharacters);
    } while (newVariance > 0.5);

    setResultCharacters(newCharacters);
  };

  return (
    <Page>
      <Form onSubmit={onRandomizeClick}>
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
          <Checkbox
            checked={shouldIncludeFromTheAbyssCharacters}
            onChange={setShouldIncludeFromTheAbyssCharacters}
          >
            From the Abyss expansion
          </Checkbox>
        </fieldset>
        <button type='submit'>Randomize</button>
      </Form>
      {resultCharacters.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Title</th>
              <th scope='col'>Starting Item</th>
            </tr>
          </thead>
          <tbody>
            {resultCharacters.map((character) => (
              <tr key={character.name}>
                <th scope='row'>{character.name}</th>
                <td>{titlesMap[character.name] ?? emptyCharacter}</td>
                <td>{character.startingItem || emptyCharacter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Page>
  );
}
