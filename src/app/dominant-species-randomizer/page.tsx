'use client';
import { ChangeEvent, Fragment, useState } from 'react';
import { Page } from '@/components/Page';
import { shuffleArray } from '@/utils/shuffleArray';

const classes = [
  'Mammals',
  'Reptiles',
  'Birds',
  'Amphibians',
  'Arachnids',
  'Insects',
  'Mammals',
  'Reptiles',
  'Birds',
  'Amphibians',
  'Arachnids',
  'Insects',
];

export default function TeamsRandomizerPage() {
  const [playerCount, setPlayerCount] = useState(2);
  const [result, setResult] = useState<Array<string>>([]);

  const onPlayerCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerCount(Number(event.target.value));
  };

  const onSubmit = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    let result: Array<string>;

    if (playerCount === 2) {
      result = [classes[randomIndex], classes[randomIndex + 3]];
    } else if (playerCount === 3) {
      result = [
        classes[randomIndex],
        classes[randomIndex + 2],
        classes[randomIndex + 4],
      ];
    } else if (playerCount === 4) {
      result = [
        classes[randomIndex],
        classes[randomIndex + 1],
        classes[randomIndex + 3],
        classes[randomIndex + 4],
      ];
    } else {
      throw new Error('invalid player count');
    }

    const shuffledResult = shuffleArray(result);

    setResult(shuffledResult);
  };

  return (
    <Page title='Dominant Species Randomizer'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <fieldset>
          <legend>Player count</legend>
          {[2, 3, 4].map((value) => (
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
        <button type='submit'>Randomize</button>
      </form>
      {result.length > 0 && (
        <div>
          {result.map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>
      )}
    </Page>
  );
}
