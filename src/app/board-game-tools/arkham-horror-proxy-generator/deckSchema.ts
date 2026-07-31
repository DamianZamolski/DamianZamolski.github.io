import { z } from 'zod';

export const deckSchema = z.object({
  investigator_code: z.string(),
  slots: z.record(z.string(), z.number()),
  sideSlots: z
    .union([z.record(z.string(), z.number()), z.array(z.unknown())])
    .optional(),
});
