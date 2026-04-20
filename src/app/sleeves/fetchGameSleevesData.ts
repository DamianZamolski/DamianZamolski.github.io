import { z } from 'zod';
import { cardSetSchema } from './cardSetSchema';
import { requestWithCorsFallback } from '@/utils/http';

const apiResponseSchema = z.object({ cardSets: z.array(cardSetSchema) });

export async function fetchGameSleevesData(
  gameId: string,
): Promise<Record<string, number>> {
  let jsonData: unknown;

  try {
    const response = await requestWithCorsFallback<unknown>(
      `https://api.geekdo.com/api/cardsetsbygame?objectid=${gameId}`,
    );
    jsonData = response.data;
  } catch {
    return {};
  }

  const sleevesData = apiResponseSchema.parse(jsonData);

  return (sleevesData.cardSets[0]?.cardTypes ?? []).reduce<
    Record<string, number>
  >((acc, { width, height, quantity }) => {
    acc[`${width} - ${height}`] = parseInt(quantity, 10);

    return acc;
  }, {});
}
