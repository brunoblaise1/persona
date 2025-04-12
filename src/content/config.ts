import { defineCollection, z } from "astro:content";
const Collection = defineCollection({
    schema: z.object({
        title: z.string(),
        published: z.string(),
        language: z.string(),
    }),
});

// const yearsCollection = defineCollection({
//     schema: z.object({

//     })
// })

export const collections = {
    blogs: Collection,
};
