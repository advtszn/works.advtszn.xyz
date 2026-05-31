import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    role: z.array(z.string()),
    tech: z.array(z.object({ label: z.string(), url: z.url() })),
    url: z.url(),
    date: z.date(),
    thumbnail: z.string(),
  }),
});

export const collections = { work };
