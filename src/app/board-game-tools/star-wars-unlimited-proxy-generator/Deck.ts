import type { z } from 'zod';
import type { deckSchema } from './deckSchema';

export type Deck = z.infer<typeof deckSchema>;
