import type { Character } from './Character';

export type Quest = {
  name: string;
  requiredCharacters?: Array<Character>;
};
