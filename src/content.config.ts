import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/works" }),
	schema: z.object({
		title: z.string(),
		category: z.string(),
		role: z.string(),
		tech: z.array(z.string()),
		url: z.string().optional(),
		date: z.date(),
		thumbnail: z.string(),
		timeline: z.string(),
		overview: z.string(),
		contribution: z.string(),
	}),
});

export const collections = { work };
