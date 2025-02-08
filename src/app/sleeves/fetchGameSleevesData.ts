import { z } from 'zod';
import { cardSetSchema } from './cardSetSchema';

const apiResponseSchema = z
  .object({ cardSets: z.array(cardSetSchema) })
  .passthrough();

export async function fetchGameSleevesData(
  gameId: string,
): Promise<Record<string, number>> {
  const response = await fetch(
    `https://corsproxy.io/?url=https://api.geekdo.com/api/cardsetsbygame?objectid=${gameId}`,
  );

  if (!response.ok) {
    return {};
  }

  const jsonData = await response.json();
  const sleevesData = apiResponseSchema.parse(jsonData);

  return sleevesData.cardSets[0].cardTypes.reduce<Record<string, number>>(
    (acc, { width, height, quantity }) => {
      acc[`${width} - ${height}`] = parseInt(quantity, 10);

      return acc;
    },
    {},
  );
}
