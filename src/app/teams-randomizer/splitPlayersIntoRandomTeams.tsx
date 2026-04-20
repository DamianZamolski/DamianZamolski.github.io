'use client';
import { shuffleArray } from '@/utils/shuffleArray';

export function splitPlayersIntoRandomTeams(
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
