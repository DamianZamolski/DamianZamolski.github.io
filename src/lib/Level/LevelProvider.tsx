import { ReactNode } from 'react';
import Level from './Level';

interface LevelProviderProps {
  level: number;
  children: ReactNode;
}

export default function LevelProvider({ level, children }: LevelProviderProps) {
  return <Level.Provider value={level}>{children}</Level.Provider>;
}
