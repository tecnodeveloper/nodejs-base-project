import { z } from 'zod';

export const bookSchema = z.object({
  name: z.string(),
  authors: z.array(z.string()),
  price: z.number().min(0),
  publisher: z.string().optional(),
});

export const updateBookSchema = z.object({
  name: z.string().optional(),
  authors: z.array(z.string()).optional(),
  price: z.number().min(0).optional(),
  publisher: z.string().optional(),
});
