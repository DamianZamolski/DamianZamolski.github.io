'use client';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { getTitle } from '@/titles';
import { Breadcrumbs } from './Breadcrumbs';

export function Page({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const slug = segments.at(-1) ?? 'home';

  return (
    <main>
      <header>
        <Breadcrumbs />
        <h1>{getTitle(slug)}</h1>
      </header>
      {children}
    </main>
  );
}
