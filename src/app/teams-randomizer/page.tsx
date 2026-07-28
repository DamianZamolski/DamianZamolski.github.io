'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { type ChangeEvent, useState } from 'react';
import { Page } from '@/components/Page';
import { CopyButton } from '@/components/CopyButton';
import { splitPlayersIntoRandomTeams } from './splitPlayersIntoRandomTeams';
import { Form } from '@/components/Form';

const teamsCountAtom = atomWithStorage<number>('teams-randomizer-count', 2);
const playersTextAtom = atomWithStorage<string>('teams-randomizer-players', '');

export default function TeamsRandomizerPage() {
  const [teamsCount, setTeamsCount] = useAtom(teamsCountAtom);
  const [playersText, setPlayersText] = useAtom(playersTextAtom);
  const [teams, setTeams] = useState<Array<Array<string>>>([]);

  const onTeamsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (value >= 0) {
      setTeamsCount(value);
    }
  };

  const onPlayersTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPlayersText(event.target.value);
  };

  const playersTextRows = playersText.split('\n');

  const onSubmit = () => {
    const players: Array<Array<string>> = playersTextRows
      .map((row) => row.trim())
      .filter(Boolean)
      .map((row) => row.split(/\s+/));

    const randomTeams = splitPlayersIntoRandomTeams(players, teamsCount);
    setTeams(randomTeams);
  };

  return (
    <Page>
      <Form onSubmit={onSubmit}>
        <label>
          Teams count:
          <input
            type='number'
            min={2}
            value={teamsCount}
            onChange={onTeamsCountChange}
          />
        </label>
        <textarea
          value={playersText}
          onChange={onPlayersTextChange}
          rows={playersTextRows.length + 1}
          className='no-resize'
        />
        <button type='submit'>Randomize</button>
      </Form>
      {teams.length > 0 && (
        <>
          <ol>
            {teams.map((team, teamIndex) => (
              <li key={`team-${teamIndex}`}>{team.join(' ')}</li>
            ))}
          </ol>
          <CopyButton
            value={teams
              .map((team) => team.join(' '))
              .map((teamString, teamIndex) => `${teamIndex + 1}. ${teamString}`)
              .join('\n')}
          />
        </>
      )}
    </Page>
  );
}
