import type { Quest } from './Quest';
import type { Character } from './Character';

export type Setup = {
  quests: Array<Quest>;
  characters: Array<Character>;
};
