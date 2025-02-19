import { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export function Page({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main>
      <header>
        <Breadcrumbs />
        <h1>{title}</h1>
      </header>
      {children}
    </main>
  );
}
