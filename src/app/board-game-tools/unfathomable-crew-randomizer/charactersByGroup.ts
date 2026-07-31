import { groupOrder } from './groupOrder';
import { unfathomableCharacters } from './unfathomableCharacters';

export const charactersByGroup = groupOrder.map((group) => ({
  group,
  characters: unfathomableCharacters
    .filter((character) => (character.expansion ?? 'Base') === group)
    .sort((a, b) => a.name.localeCompare(b.name)),
}));
