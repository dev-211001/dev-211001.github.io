import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.object({
      en: z.string(),
      mm: z.string(),
    }),
    description: z.object({
      en: z.string(),
      mm: z.string(),
    }),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};
