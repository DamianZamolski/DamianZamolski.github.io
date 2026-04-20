'use client';
import { atomWithStorage } from 'jotai/utils';
import { fetchGamesSleevesData } from './fetchGamesSleevesData';
import { findGameIds } from './findGameIds';
import { Page } from '@/components/Page';
import { useAtom } from 'jotai';
import { useState } from 'react';

const textAtom = atomWithStorage('text', '');

export default function SleevesPage() {
  const [text, setText] = useAtom(textAtom);
  const [isFetching, setFetching] = useState(false);
  const [sleevesData, setSleevesData] = useState<Record<string, number>>({});

  const handleFetch = async () => {
    setFetching(true);
    const gameIds = findGameIds(text);
    const sleevesData = await fetchGamesSleevesData(gameIds);
    setSleevesData(sleevesData);
    setFetching(false);
  };

  return (
    <Page title='Sleeves'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleFetch();
        }}
      >
        <label>
          BGG URLs
          <textarea
            onChange={(e) => setText(e.target.value)}
            placeholder='Paste BGG URLs here. Separate them with spaces or enters.'
            rows={text.split('\n').length + 2}
            style={{ resize: 'none' }}
            value={text}
          />
        </label>
        <button type='submit' aria-busy={isFetching} disabled={isFetching}>
          Count sleeves
        </button>
      </form>
      {Object.keys(sleevesData).length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(sleevesData)
              .sort()
              .map(([key, quantity]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Page>
  );
}
