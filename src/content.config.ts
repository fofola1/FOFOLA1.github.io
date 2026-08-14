import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      coverImage: image(),
      coverAlt: z.string().default('Project image'),
      githubUrl: z.string().url().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      widgets: z
        .array(
          z.object({
            name: z.string(),
            description: z.string(),
          })
        )
        .optional(),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
