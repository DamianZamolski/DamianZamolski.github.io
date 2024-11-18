import { getDirectories } from '@/utils/getDirectories';

export default function HomePage() {
  const pages = getDirectories(import.meta.url);

  return (
    <main>
      <header>
        <h1>Damian Zamolski</h1>
      </header>
      <aside>
        <nav>
          <ul>
            {pages.map((page) => (
              <li key={page}>
                <a href={`/${page}`}>
                  {page
                    .split('-')
                    .map((part) => part[0].toUpperCase() + part.slice(1))
                    .join(' ')}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </main>
  );
}
