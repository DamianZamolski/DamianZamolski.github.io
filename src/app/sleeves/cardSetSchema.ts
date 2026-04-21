import { z } from 'zod';
import { cardTypeSchema } from './cardTypeSchema';

export const cardSetSchema = z.looseObject({
  name: z.string().optional(),
  cardTypes: z.array(cardTypeSchema),
});
