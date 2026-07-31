import { z } from 'zod';

export const deckSchema = z.object({
  leader: z.object({ defaultImagePath: z.string() }),
  base: z.object({ defaultImagePath: z.string() }),
  shuffledDeck: z.array(
    z.object({ card: z.object({ defaultImagePath: z.string() }) }),
  ),
});
