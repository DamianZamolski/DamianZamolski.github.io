import { ReactNode } from 'react';
import NextLevelProvider from './Level/NextLevelProvider';
import Heading from './Heading';

interface SectionProps {
  heading: string;
  children: ReactNode;
}

export default function Section({ heading, children }: SectionProps) {
  return (
    <NextLevelProvider>
      <section>
        <Heading>{heading}</Heading>
        {children}
      </section>
    </NextLevelProvider>
  );
}
