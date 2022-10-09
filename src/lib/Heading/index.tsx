import { ReactNode } from 'react';
import useLevel from '../Level/useLevel';

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  const level = useLevel() as 1 | 2 | 3 | 4 | 5 | 6;
  const Component: keyof JSX.IntrinsicElements = `h${level}`;
  return <Component>{children}</Component>;
}
