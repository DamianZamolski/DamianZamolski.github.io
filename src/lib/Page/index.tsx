import { ReactNode } from 'react';
import { NextLevelProvider } from '@/Level';
import Head from './Head';

interface PageProps {
  title: string;
  children: ReactNode;
}

export default function Page({ title, children }: PageProps) {
  return (
    <>
      <Head title={title} />
      <NextLevelProvider>{children}</NextLevelProvider>
    </>
  );
}
