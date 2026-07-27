'use client';
import { type ReactNode, useState } from 'react';

export function ShareButton({
  value,
  children = 'Copy link',
}: {
  value?: string;
  children?: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(value ?? window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <button type='button' onClick={onClick}>
        {children}
      </button>
      {copied && <small role='status'>Copied</small>}
    </>
  );
}
