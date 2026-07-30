'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { calculateCharactersVariance } from './calculateCharactersVariance';
import { useMemo, useState } from 'react';
import { emptyCharacter } from './emptyCharacter';
import { shuffleArray } from '@/utils/shuffleArray';
import type { UnfathomableCharacter } from './UnfathomableCharacter';
import { unfathomableCharacters } from './unfathomableCharacters';
import { Page } from '@/components/Page';
import { Checkbox } from '@/components/Checkbox';
import { Form } from '@/components/Form';
import { RadioGroup } from '@/components/RadioGroup';
import { Radio } from '@/components/Radio';
import { SubmitButton } from '@/components/SubmitButton';

const groupOrder = ['Base', 'From the Abyss'] as const;

const charactersByGroup = groupOrder.map((group) => ({
  group,
  characters: unfathomableCharacters
    .filter((character) => (character.expansion ?? 'Base') === group)
    .sort((a, b) => a.name.localeCompare(b.name)),
}));

const allCharacterNames = unfathomableCharacters.map(
  (character) => character.name,
);

const poolAtom = atomWithStorage<Array<string>>(
  'unfathomable-crew-randomizer-character-pool',
  allCharacterNames,
);

const playerCountAtom = atomWithStorage(
  'unfathomable-crew-randomizer-player-count',
  3,
);

const maxRandomizeAttempts = 1_000_000;

export default function UnfathomableCrewRandomizerPage() {
  const [playerCount, setPlayerCount] = useAtom(playerCountAtom);
  const [pool, setPool] = useAtom(poolAtom);

  const poolSet = useMemo(() => new Set(pool), [pool]);

  const charactersPool = useMemo(
    () =>
      unfathomableCharacters.filter((character) => poolSet.has(character.name)),
    [poolSet],
  );

  const toggleCharacter = (name: string) => {
    setPool((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name],
    );
  };

  const toggleGroup = (
    groupCharacters: ReadonlyArray<UnfathomableCharacter>,
  ) => {
    const names = groupCharacters.map((character) => character.name);
    const allIn = names.every((name) => poolSet.has(name));

    setPool((prev) =>
      allIn
        ? prev.filter((name) => !names.includes(name))
        : Array.from(new Set([...prev, ...names])),
    );
  };

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

  const onRandomizeClick = () => {
    let bestCharacters = shuffleArray(charactersPool).slice(0, playerCount);
    let bestVariance = calculateCharactersVariance(bestCharacters);

    for (
      let attempt = 0;
      attempt < maxRandomizeAttempts && bestVariance > 0.5;
      attempt++
    ) {
      const candidate = shuffleArray(charactersPool).slice(0, playerCount);
      const variance = calculateCharactersVariance(candidate);

      if (variance < bestVariance) {
        bestVariance = variance;
        bestCharacters = candidate;
      }
    }

    setResultCharacters(bestCharacters);
  };

  return (
    <Page>
      <Form onSubmit={onRandomizeClick}>
        <fieldset>
          <RadioGroup
            label='Player Count'
            value={playerCount}
            onChange={setPlayerCount}
          >
            {[3, 4, 5, 6].map((value) => (
              <Radio key={value} value={value} />
            ))}
          </RadioGroup>
          <details>
            <summary>Character Pool ({pool.length} selected)</summary>
            {charactersByGroup.map(({ group, characters }) => (
              <fieldset key={group}>
                <legend>
                  <Checkbox
                    checked={characters.every((character) =>
                      poolSet.has(character.name),
                    )}
                    onChange={() => toggleGroup(characters)}
                  >
                    <strong>{group}</strong>
                  </Checkbox>
                </legend>
                {characters.map((character) => (
                  <Checkbox
                    key={character.name}
                    checked={poolSet.has(character.name)}
                    onChange={() => toggleCharacter(character.name)}
                  >
                    {character.name}
                  </Checkbox>
                ))}
              </fieldset>
            ))}
          </details>
        </fieldset>
        <SubmitButton disabled={pool.length < playerCount}>
          Randomize
        </SubmitButton>
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
