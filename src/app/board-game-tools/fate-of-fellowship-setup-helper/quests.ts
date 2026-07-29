import type { Quest } from './Quest';

export const destroyTheRing: Quest = {
  name: 'Destroy the One Ring',
  requiredCharacters: ['Frodo & Sam'],
};

export const quests: Array<Quest> = [
  destroyTheRing,
  {
    name: 'The Hobbits Pledge Their Loyalty',
    requiredCharacters: ['Merry & Pippin'],
  },
  { name: 'No Longer a Shieldmaiden', requiredCharacters: ['Éowyn'] },
  { name: 'Bring Light to Mirkwood' },
  { name: 'Challenge Sauron' },
  { name: 'Battle the Balrog', requiredCharacters: ['Gandalf'] },
  { name: 'Earn the Blessing of the Elves' },
  { name: 'Open the Dungeons', requiredCharacters: ['Galadriel'] },
  { name: "Free Théoden's Mind" },
  { name: 'There Are Six', requiredCharacters: ['Legolas'] },
  { name: 'Saruman, Your Staff Is Broken' },
  { name: 'Guard the Crossing of the Anduin', requiredCharacters: ['Faramir'] },
  { name: 'Battles of the Éored', requiredCharacters: ['Éomer'] },
  { name: 'The Rangers Guard Eriador' },
  { name: 'Overthrow Denethor' },
  { name: "Shelob's Lair", requiredCharacters: ['Gollum'] },
  { name: 'The Banner Woven by Arwen', requiredCharacters: ['Arwen'] },
  { name: 'Avenge Balin' },
  { name: 'Let the Shadow Vanish from the Dwarven Lands' },
  { name: 'Deal with the Descendants of Fréca' },
  { name: 'Boromir Regains His Honor', requiredCharacters: ['Boromir'] },
  {
    name: 'The Oathbreakers Keep Their Oaths',
    requiredCharacters: ['Aragorn'],
  },
  { name: 'Infiltrate Minas Morgul' },
  { name: 'Subdue Umbar' },
];
