import { z } from 'zod';
import { cardSetSchema } from './cardSetSchema';

export type CardSet = z.infer<typeof cardSetSchema>;
