'use client';
import { calculateCharactersTotals } from './calculateCharactersTotals';
import { calculateCharactersVariance } from './calculateCharactersVariance';
import {
  type ChangeEvent,
  type SubmitEvent,
  Fragment,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useTranslations } from 'next-intl';
import { emptyCharacter } from './emptyCharacter';
import { shuffleArray } from '@/utils/shuffleArray';
import type { UnfathomableCharacter } from './UnfathomableCharacter';
import { unfathomableCharacters } from './unfathomableCharacters';
import { Page } from '@/components/Page';

export default function UnfathomableCrewRandomizerPage() {
  const t = useTranslations('unfathomable');
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
      [captain.name]: t('captain'),
      [keeperOfTheTome.name]: t('keeperOfTheTome'),
    }),
    [captain.name, keeperOfTheTome.name, t],
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

  const onRandomizeClick = useCallback(
    (event: SubmitEvent) => {
      event.preventDefault();
      let newCharacters: Array<UnfathomableCharacter>;
      let newVariance: number;

      do {
        newCharacters = shuffleArray(charactersPool).slice(0, playerCount);
        newVariance = calculateCharactersVariance(newCharacters);
      } while (newVariance > 0.5);

      setResultCharacters(newCharacters);
    },
    [charactersPool, playerCount],
  );

  return (
    <Page slug='unfathomable-crew-randomizer'>
      <form onSubmit={onRandomizeClick}>
        <fieldset>
          <fieldset>
            <legend>{t('playerCount')}</legend>
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
            {t('includeAbyss')}
          </label>
        </fieldset>
        <button type='submit'>{t('randomize')}</button>
      </form>
      {resultCharacters.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope='col'>{t('name')}</th>
              <th scope='col'>{t('title')}</th>
              <th scope='col'>{t('influence')}</th>
              <th scope='col'>{t('lore')}</th>
              <th scope='col'>{t('perception')}</th>
              <th scope='col'>{t('strength')}</th>
              <th scope='col'>{t('will')}</th>
            </tr>
          </thead>
          <tbody>
            {resultCharacters.map((character) => (
              <tr key={character.name}>
                <th scope='row'>{character.name}</th>
                <td>{titlesMap[character.name] ?? emptyCharacter}</td>
                <td className='center'>
                  {character.influence ?? emptyCharacter}
                </td>
                <td className='center'>{character.lore ?? emptyCharacter}</td>
                <td className='center'>
                  {character.perception ?? emptyCharacter}
                </td>
                <td className='center'>
                  {character.strength ?? emptyCharacter}
                </td>
                <td className='center'>{character.will ?? emptyCharacter}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope='row' colSpan={2}>
                {t('total')}
              </th>
              <td className='center'>{totals.influence}</td>
              <td className='center'>{totals.lore}</td>
              <td className='center'>{totals.perception}</td>
              <td className='center'>{totals.strength}</td>
              <td className='center'>{totals.will}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </Page>
  );
}
