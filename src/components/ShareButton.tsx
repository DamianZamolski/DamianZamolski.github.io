'use client';
import { CopyButton } from './CopyButton';

export function ShareButton() {
  return (
    <CopyButton
      label='Share'
      copiedLabel='Link copied!'
      value={window.location.href}
    />
  );
}
