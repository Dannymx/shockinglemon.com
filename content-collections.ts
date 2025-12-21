/* eslint-disable no-underscore-dangle */
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const post = defineCollection({
  name: "Post",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    date: z.iso.date(),
    image: z.string().optional(),
    author: z.string(),
    content: z.string(),
  }),
  transform: async (doc, context) => {
    const mdx = await compileMDX(context, doc);

    return {
      ...doc,
      _id: doc._meta.filePath,
      mdx,
    };
  },
});

const member = defineCollection({
  name: "Member",
  directory: "content/band",
  include: "**/*.mdx",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    content: z.string(),
  }),
  transform: async (doc, context) => {
    const mdx = await compileMDX(context, doc);

    return {
      ...doc,
      _id: doc._meta.filePath,
      slug: doc._meta.fileName.replace(/(\.[^.]+){1}$/, ""),
      language: doc._meta.directory.replace(/.*\//, ""),
      mdx,
    };
  },
});

export default defineConfig({
  collections: [post, member],
});
