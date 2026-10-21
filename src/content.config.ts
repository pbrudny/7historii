import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const studia = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/studia' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    group: z.enum(['historie', 'materialy', 'page']),
    passage: z.string().optional(),
    summary: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { studia };
