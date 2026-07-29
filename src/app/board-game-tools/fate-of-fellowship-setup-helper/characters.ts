export const characters = [
  'Frodo & Sam',
  'Merry & Pippin',
  'Aragorn',
  'Gandalf',
  'Gimli',
  'Legolas',
  'Galadriel',
  'Eowin',
  'Boromir',
  'Faramir',
  'Eomer',
  'Gollum',
  'Arwen',
] as const;

export type Character = (typeof characters)[number];
