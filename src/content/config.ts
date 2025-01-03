import { defineCollection, z } from "astro:content"


const blogsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        published: z.string(),
        language: z.string()

 
    })
})


export const cllections = {
    blogs: blogsCollection,
}