import { shuffleArray } from '@/utils/shuffleArray';
import { characters, type Character } from './characters';
import type { Quest } from './Quest';
import { destroyTheRing, quests } from './quests';

export type Setup = {
  quests: Array<Quest>;
  characters: Array<Character>;
};

export type PickSetupInput = {
  playerCount: number;
  questCount: number;
  includeDestroyTheRing: boolean;
};

export function pickSetup({
  playerCount,
  questCount,
  includeDestroyTheRing,
}: PickSetupInput): Setup | null {
  const characterSlots = playerCount * 2;

  const forcedQuests = includeDestroyTheRing ? [destroyTheRing] : [];

  const requiredCharacters = new Set<Character>(
    forcedQuests.flatMap((quest) => quest.requiredCharacters ?? []),
  );

  if (requiredCharacters.size > characterSlots) {
    return null;
  }

  const selectedQuests: Array<Quest> = [...forcedQuests];

  const randomPool = shuffleArray(
    quests.filter((quest) => quest !== destroyTheRing),
  );

  for (const quest of randomPool) {
    if (selectedQuests.length === questCount) {
      break;
    }

    const withCandidate = new Set(requiredCharacters);

    (quest.requiredCharacters ?? []).forEach((character) =>
      withCandidate.add(character),
    );

    if (withCandidate.size <= characterSlots) {
      selectedQuests.push(quest);

      (quest.requiredCharacters ?? []).forEach((character) =>
        requiredCharacters.add(character),
      );
    }
  }

  if (selectedQuests.length < questCount) {
    return null;
  }

  const seededCharacters = [...requiredCharacters];

  const filledCharacters = shuffleArray(
    characters.filter((character) => !requiredCharacters.has(character)),
  ).slice(0, characterSlots - seededCharacters.length);

  return {
    quests: selectedQuests,
    characters: shuffleArray([...seededCharacters, ...filledCharacters]),
  };
}
