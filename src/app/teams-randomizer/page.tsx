'use client';
import styles from './styles.module.css';
import { ChangeEvent, useState } from 'react';
import { Page } from '@/components/Page';
import { splitPlayersIntoRandomTeams } from './splitPlayersIntoRandomTeams';

export default function TeamsRandomizerPage() {
  const [teamsCount, setTeamsCount] = useState(2);
  const [playersText, setPlayersText] = useState('');
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
          onChange={onPlayersTextChange}
          rows={playersTextRows.length + 1}
          className={styles.noResize}
        />
        <button type='submit'>Randomize</button>
      </form>
      {teams.length > 0 &&
        teams.map((team, teamIndex) => (
          <div key={`team-${teamIndex}`}>
            Team {teamIndex}: {team.join(' ')}
          </div>
        ))}
    </Page>
  );
}
