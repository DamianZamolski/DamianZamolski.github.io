'use client';
import { type ReactNode, useState } from 'react';
import styles from './ShareButton.module.css';

export function ShareButton({ children = 'Share' }: { children?: ReactNode }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span className={styles.wrapper}>
      <button type='button' onClick={onClick}>
        {children}
      </button>
      {copied && <output>Link copied</output>}
    </span>
  );
}
