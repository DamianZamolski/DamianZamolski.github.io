'use client';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Form } from '@/components/Form';
import { Page } from '@/components/Page';
import { RadioGroup } from '@/components/RadioGroup';
import { Radio } from '@/components/Radio';
import { SubmitButton } from '@/components/SubmitButton';
import { pickSetup } from './pickSetup';
import type { Setup } from './Setup';
import { playerCounts } from './playerCounts';
import { questCounts } from './questCounts';
import { playerCountAtom } from './playerCountAtom';
import { questCountAtom } from './questCountAtom';

export default function FateOfFellowshipSetupHelperPage() {
  const [playerCount, setPlayerCount] = useAtom(playerCountAtom);
  const [questCount, setQuestCount] = useAtom(questCountAtom);

  const [setup, setSetup] = useState<Setup | null>(null);
  const [hasPicked, setHasPicked] = useState(false);

  const onPick = () => {
    setHasPicked(true);
    setSetup(pickSetup({ playerCount, questCount }));
  };

  return (
    <Page>
      <Form onSubmit={onPick}>
        <RadioGroup
          label='Players'
          value={playerCount}
          onChange={setPlayerCount}
        >
          {playerCounts.map((count) => (
            <Radio key={count} value={count} />
          ))}
        </RadioGroup>
        <RadioGroup
          label='Quests to pick'
          value={questCount}
          onChange={setQuestCount}
        >
          {questCounts.map((count) => (
            <Radio key={count} value={count} />
          ))}
        </RadioGroup>
        <SubmitButton>Pick</SubmitButton>
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
                <li key={quest.name}>{quest.name}</li>
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
