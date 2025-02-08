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
  const [results, setResults] = useState<Record<string, number>>({});

  const handleFetch = async () => {
    const gameIds = findGameIds(text);
    const data = await fetchGamesSleevesData(gameIds);
    setResults(data);
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
          Games
          <textarea
            style={{ resize: 'none' }}
            rows={text.split('\n').length + 2}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type='submit' value='Fetch' />
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
