'use client';
import styles from './styles.module.css';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { type ChangeEvent, useState } from 'react';
import { Page } from '@/components/Page';
import { splitPlayersIntoRandomTeams } from './splitPlayersIntoRandomTeams';

const teamsCountAtom = atomWithStorage<number>('teams-randomizer-count', 2);
const playersTextAtom = atomWithStorage<string>('teams-randomizer-players', '');

export default function TeamsRandomizerPage() {
  const [teamsCount, setTeamsCount] = useAtom(teamsCountAtom);
  const [playersText, setPlayersText] = useAtom(playersTextAtom);
  const [teams, setTeams] = useState<Array<Array<string>>>([]);
  const [copied, setCopied] = useState(false);

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

  const onCopy = async () => {
    const text = teams.map((team) => team.join(' ')).join('\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Page title='Teams Randomizer'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
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
          className={styles.noResize}
        />
        <button type='submit'>Randomize</button>
      </form>
      {teams.length > 0 && (
        <>
          <ol>
            {teams.map((team, teamIndex) => (
              <li key={`team-${teamIndex}`}>{team.join(' ')}</li>
            ))}
          </ol>
          <button type='button' onClick={onCopy}>
            Copy teams
          </button>
          {copied && <small role='status'>Copied</small>}
        </>
      )}
    </Page>
  );
}
