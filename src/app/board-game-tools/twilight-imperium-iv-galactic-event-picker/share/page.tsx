'use client';
import { Suspense } from 'react';
import { Page } from '@/components/Page';
import { SharedEvents } from './SharedEvents';

export default function SharePage() {
  return (
    <Page>
      <Suspense>
        <SharedEvents />
      </Suspense>
    </Page>
  );
}
