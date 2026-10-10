import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        seoTitle: z.string(),
        description: z.string(),
        path: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/),
        kind: z.enum(['proyecto', 'laboratorio', 'pagina']),
        legacyProjectAlias: z.boolean().default(false),
        originalPublished: z.coerce.date().optional(),
        chronologicalDate: z.coerce.date().optional(),
        revised: z.coerce.date(),
        socialImage: z.string().optional(),
        mediaCredits: z.array(z.string().min(1)).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { portfolio };
