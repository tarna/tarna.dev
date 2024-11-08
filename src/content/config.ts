import { z, defineCollection } from "astro:content";
import { categories } from 'src/pages/projects/[...page].astro';

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date().optional(),
	updatedDate: z.string().optional(),
	heroImage: z.string().optional(),
	badge: z.string().optional(),
	tags: z
		.array(z.string())
		.refine((items) => new Set(items).size === items.length, {
			message: "tags must be unique",
		})
		.optional(),
    hidden: z.boolean().optional(),
    featured: z.boolean().optional(),
});

const storeSchema = z.object({
	title: z.string(),
	description: z.string(),
	custom_link_label: z.string(),
	custom_link: z.string().optional(),
	updatedDate: z.coerce.date(),
	pricing: z.string().optional(),
	oldPricing: z.string().optional(),
	badge: z.string().optional(),
	checkoutUrl: z.string().optional(),
	heroImage: z.string().optional(),
});

const categoryNames = categories.map((category) => category.name);
const projectSchema = z.object({
	...blogSchema.shape,
	index: z.number(),
	category: z
        .string()
        .refine((value) => categoryNames.includes(value), {
            message: "Invalid category",
        }),
	link: z.string().optional(),
	source: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
	blog: blogCollection,
	store: storeCollection,
	project: projectCollection,
};
