import { getDirectories } from '@/utils/getDirectories';

export function TableOfContents({ url }: { url: string }) {
  const pages = getDirectories(url);
  const basePath = url.split('app')[1].split('page')[0];

  return (
    <aside>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <a href={`${basePath}${page}`}>
                {page
                  .split('-')
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(' ')}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}