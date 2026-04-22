'use client';
import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Breadcrumbs } from './Breadcrumbs';

export function Page({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const t = useTranslations('routes');

  return (
    <main>
      <header>
        <Breadcrumbs />
        <h1>{t(slug)}</h1>
      </header>
      {children}
    </main>
  );
}
