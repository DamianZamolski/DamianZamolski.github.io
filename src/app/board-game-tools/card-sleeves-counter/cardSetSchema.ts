import { z } from 'zod';
import { cardTypeSchema } from './cardTypeSchema';

export const cardSetSchema = z.looseObject({
  name: z.string().nullish(),
  cardTypes: z.array(cardTypeSchema),
});
