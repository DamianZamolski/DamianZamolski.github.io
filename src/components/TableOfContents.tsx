import Link from 'next/link';
import { getDirectories } from '@/utils/getDirectories';
import { getTitle } from '@/titles';

export function TableOfContents({ url }: { url: string }) {
  const pages = getDirectories(url).filter((p) => !p.startsWith('['));
  const basePath = url.split('/src/app')[1]!.split('page')[0];

  return (
    <nav aria-label='Tools'>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`${basePath}${page}`}>{getTitle(page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
