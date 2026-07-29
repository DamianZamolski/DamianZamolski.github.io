import type { Quest } from './Quest';

export const destroyTheRing: Quest = {
  name: 'Destroy the Ring',
  requiredCharacters: ['Frodo & Sam'],
};

export const quests: Array<Quest> = [
  destroyTheRing,
  { name: 'Quest 2', requiredCharacters: ['Aragorn'] },
  { name: 'Quest 3', requiredCharacters: ['Gandalf', 'Legolas'] },
  { name: 'Quest 4', requiredCharacters: [] },
  { name: 'Quest 5', requiredCharacters: [] },
  { name: 'Quest 6', requiredCharacters: ['Gollum'] },
  { name: 'Quest 7', requiredCharacters: [] },
  { name: 'Quest 8', requiredCharacters: ['Merry & Pippin'] },
  { name: 'Quest 9', requiredCharacters: [] },
  { name: 'Quest 10', requiredCharacters: [] },
  { name: 'Quest 11', requiredCharacters: [] },
];
