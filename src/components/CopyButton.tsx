'use client';
import { useState } from 'react';

export function CopyButton({
  value,
  label = 'Copy',
  copiedLabel = 'Copied!',
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={copied}
      className='full-width'
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
