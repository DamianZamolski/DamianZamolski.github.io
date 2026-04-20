import { fetchGameSleevesData } from './fetchGameSleevesData';

export async function fetchGamesSleevesData(
  gameIds: Array<string>,
): Promise<Record<string, number>> {
  const sleevesDatas = await Promise.all(gameIds.map(fetchGameSleevesData));

  return sleevesDatas.reduce<Record<string, number>>((result, sleeveData) => {
    Object.entries(sleeveData).forEach(([cardType, quantity]) => {
      result[cardType] = (result[cardType] ?? 0) + quantity;
    });

    return result;
  }, {});
}
