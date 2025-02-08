import { z } from 'zod';

export const cardTypeSchema = z
  .object({ width: z.string(), height: z.string(), quantity: z.string() })
  .passthrough();
