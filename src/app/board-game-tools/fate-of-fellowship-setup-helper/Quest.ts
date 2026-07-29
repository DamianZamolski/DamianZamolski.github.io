import type { Character } from './characters';

export type Quest = {
  name: string;
  requiredCharacters: Array<Character>;
};
