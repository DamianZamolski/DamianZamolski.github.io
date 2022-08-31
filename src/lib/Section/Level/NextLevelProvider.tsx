import { ReactNode } from 'react';
import LevelProvider from './LevelProvider';
import useLevel from './useLevel';

interface NextLevelProviderProps {
  children: ReactNode;
}

export default function NextLevelProvider({
  children,
}: NextLevelProviderProps) {
  const nextLevel = useLevel() + 1;
  return <LevelProvider level={nextLevel}>{children}</LevelProvider>;
}
