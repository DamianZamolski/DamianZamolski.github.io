'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { Fragment, useState } from 'react';
import { Checkbox } from '@/components/Checkbox';
import { Form } from '@/components/Form';
import { Page } from '@/components/Page';
import { pickSetup, type Setup } from './pickSetup';

const playerCounts = [1, 2, 3, 4, 5];
const questCounts = [4, 5, 6];

const playerCountAtom = atomWithStorage('fate-of-fellowship-player-count', 4);
const questCountAtom = atomWithStorage('fate-of-fellowship-quest-count', 5);

const includeDestroyTheRingAtom = atomWithStorage(
  'fate-of-fellowship-include-destroy-the-ring',
  true,
);

export default function FateOfFellowshipSetupHelperPage() {
  const [playerCount, setPlayerCount] = useAtom(playerCountAtom);
  const [questCount, setQuestCount] = useAtom(questCountAtom);

  const [includeDestroyTheRing, setIncludeDestroyTheRing] = useAtom(
    includeDestroyTheRingAtom,
  );

  const [setup, setSetup] = useState<Setup | null>(null);
  const [hasPicked, setHasPicked] = useState(false);

  const onPick = () => {
    setHasPicked(true);
    setSetup(pickSetup({ playerCount, questCount, includeDestroyTheRing }));
  };

  return (
    <Page>
      <Form onSubmit={onPick}>
        <fieldset>
          <legend>Players</legend>
          {playerCounts.map((count) => (
            <Fragment key={count}>
              <input
                id={`player-count-${count}`}
                type='radio'
                name='player-count'
                checked={playerCount === count}
                onChange={() => setPlayerCount(count)}
              />
              <label htmlFor={`player-count-${count}`}>{count}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Quests to pick</legend>
          {questCounts.map((count) => (
            <Fragment key={count}>
              <input
                id={`quest-count-${count}`}
                type='radio'
                name='quest-count'
                checked={questCount === count}
                onChange={() => setQuestCount(count)}
              />
              <label htmlFor={`quest-count-${count}`}>{count}</label>
            </Fragment>
          ))}
        </fieldset>
        <Checkbox
          checked={includeDestroyTheRing}
          onChange={setIncludeDestroyTheRing}
        >
          Include Destroy the Ring quest
        </Checkbox>
        <button type='submit'>Pick</button>
      </Form>

      {hasPicked && setup === null && (
        <p role='alert'>No valid setup for these settings.</p>
      )}

      {setup && (
        <>
          <section>
            <h2>Quests</h2>
            <ul>
              {setup.quests.map((quest) => (
                <li key={quest.name}>
                  {quest.name}
                  {quest.requiredCharacters &&
                    quest.requiredCharacters.length > 0 && (
                      <small>
                        {' '}
                        (requires {quest.requiredCharacters.join(', ')})
                      </small>
                    )}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Characters</h2>
            <ul>
              {setup.characters.map((character) => (
                <li key={character}>{character}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </Page>
  );
}
