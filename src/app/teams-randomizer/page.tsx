'use client';
import { Page } from '@/components/Page';
import { shuffleArray } from '@/utils/shuffleArray';
import { ChangeEvent, useCallback, useState } from 'react';
import styles from './styles.module.css';

function splitPlayersIntoRandomTeams(
  players: Array<Array<string>>,
  teamsCount: number,
): Array<Array<string>> {
  const shuffledPlayers = players.flatMap(shuffleArray);
  const teams: Array<Array<string>> = [];

  while (shuffledPlayers.length > 0) {
    for (let i = 0; i < teamsCount; i++) {
      const player = shuffledPlayers.shift();

      if (!player) {
        break;
      }

      if (!teams[i]) {
        teams[i] = [];
      }

      teams[i].push(player);
    }

    shuffledPlayers.reverse();
  }

  return teams;
}

export default function TeamsRandomizerPage() {
  const [playersText, setPlayersText] = useState('');
  const [teamsCount, setTeamsCount] = useState(2);
  const [teams, setTeams] = useState<Array<Array<string>>>([]);

  const onPlayersTextChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setPlayersText(event.target.value);
    },
    [],
  );

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
        <textarea
          onChange={onPlayersTextChange}
          rows={playersTextRows.length + 1}
          className={styles.noResize}
        />
        <button type='submit'>Randomize</button>
      </form>
      {teams.length > 0 &&
        teams.map((team, index) => (
          <div key={index}>
            <div>Team {index}</div>
            {team.map((player, index) => (
              <div key={index}>{player}</div>
            ))}
          </div>
        ))}
    </Page>
  );
}
