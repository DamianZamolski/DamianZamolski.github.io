'use client';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { findGameIds } from './findGameIds';
import { fetchGamesSleevesData } from './fetchGamesSleevesData';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { useAtom } from 'jotai';

const storage = createJSONStorage<string>(() => localStorage);
const textAtom = atomWithStorage('text', '', storage);

export default function Page() {
  const [text, setText] = useAtom(textAtom);
  const [isFetching, setFetching] = useState(false);
  const [results, setResults] = useState<Record<string, number>>({});

  const handleFetch = async () => {
    setFetching(true);
    const gameIds = findGameIds(text);
    const data = await fetchGamesSleevesData(gameIds);
    setResults(data);
    setFetching(false);
  };

  return (
    <main>
      <header>
        <Breadcrumbs />
        <h1>Sleeves</h1>
      </header>
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
      {Object.keys(results).length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(results)
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
    </main>
  );
}
