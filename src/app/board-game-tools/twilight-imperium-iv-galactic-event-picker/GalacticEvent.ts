import { type ReactNode } from 'react';
import type { GalacticEventSource } from './GalacticEventSource';

export type GalacticEvent = {
  id: string;
  name: string;
  source: GalacticEventSource;
  complexity: number;
  effect: string | ReactNode;
};
