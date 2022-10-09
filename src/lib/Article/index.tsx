import { ReactNode } from 'react';
import { NextLevelProvider } from '@/Level';
import Heading from '@/Heading';

interface ArticleProps {
  heading: string;
  children: ReactNode;
}

export default function Article({ heading, children }: ArticleProps) {
  return (
    <article>
      <NextLevelProvider>
        <Heading>{heading}</Heading>
        {children}
      </NextLevelProvider>
    </article>
  );
}
