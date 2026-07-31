import { z } from 'zod';

export const cardSchema = z.object({
  code: z.string(),
  imagesrc: z.string().optional(),
  backimagesrc: z.string().optional(),
  double_sided: z.boolean().optional(),
  bonded_cards: z
    .array(z.object({ code: z.string(), count: z.number() }))
    .optional(),
});
