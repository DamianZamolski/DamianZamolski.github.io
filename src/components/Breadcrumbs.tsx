'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTitle } from '@/titles';

export function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label='breadcrumb'>
      <ol>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {segments.slice(0, -1).map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/');

          return (
            <li key={path}>
              <Link href={path}>{getTitle(segment)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
