import { z } from 'zod';
import { cardTypeSchema } from './cardTypeSchema';

export const cardSetSchema = z
  .object({ cardTypes: z.array(cardTypeSchema) })
  .passthrough();
