import { z } from 'zod';

export const cardTypeSchema = z.looseObject({
  width: z.string(),
  height: z.string(),
  quantity: z.string(),
});
