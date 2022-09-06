import { ReactNode } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  target: string;
  children: ReactNode;
}

export default function Link({ target, children }: LinkProps) {
  return (
    <NextLink href={target}>
      <a>{children}</a>
    </NextLink>
  );
}
