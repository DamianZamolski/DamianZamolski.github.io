'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').slice(0, -1).filter(Boolean);

  return (
    <nav aria-label='breadcrumb'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = '/' + pathSegments.slice(0, index + 1).join('/');

          const label = segment
            .replace(/-/g, ' ')
            .trim()
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={path}>
              <Link href={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
