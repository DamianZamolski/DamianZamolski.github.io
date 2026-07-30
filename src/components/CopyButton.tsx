'use client';
import { useState } from 'react';
import { Button } from './Button';

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
    <Button onClick={onClick} disabled={copied}>
      {copied ? copiedLabel : label}
    </Button>
  );
}
