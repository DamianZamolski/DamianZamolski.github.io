import type { z } from 'zod';
import type { cardSchema } from './cardSchema';

export type Card = z.infer<typeof cardSchema>;
