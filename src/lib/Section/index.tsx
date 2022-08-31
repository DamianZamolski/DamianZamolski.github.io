import { ReactNode } from 'react';

interface SectionProps {
  heading: string;
  children: ReactNode;
}

export default function Section({ heading, children }: SectionProps) {
  return (
    <section>
      <h1>{heading}</h1>
      {children}
    </section>
  );
}
