import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Journal'),
    // slug of the old WordPress URL, kept so existing links and rankings carry over
    legacySlug: z.string().optional(),
  }),
});

export const collections = { journal };
