import { ReactNode } from 'react';
import { NextLevelProvider } from '@/Level';
import Heading from '@/Heading';

interface SectionProps {
  heading: string;
  children: ReactNode;
}

export default function Section({ heading, children }: SectionProps) {
  return (
    <section>
      <NextLevelProvider>
        <Heading>{heading}</Heading>
        {children}
      </NextLevelProvider>
    </section>
  );
}
