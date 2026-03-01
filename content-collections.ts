/* eslint-disable no-underscore-dangle */
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const READ_MORE_DELIMITER = "{/* read-more */}";

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

    let excerptMdx: string | undefined;
    const delimiterIndex = doc.content.indexOf(READ_MORE_DELIMITER);
    if (delimiterIndex !== -1) {
      const excerptContent = doc.content.slice(0, delimiterIndex).trim();
      excerptMdx = await compileMDX(context, {
        ...doc,
        content: excerptContent,
      });
    }

    return {
      ...doc,
      _id: doc._meta.filePath,
      mdx,
      excerptMdx,
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

const lyrics = defineCollection({
  name: "Lyrics",
  directory: "content/music/lyrics",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
  }),
  transform: async (doc, context) => {
    const mdx = await compileMDX(context, doc);

    return {
      ...doc,
      _id: doc._meta.filePath,
      songSlug: doc._meta.fileName.replace(/(\.[^.]+){1}$/, ""),
      language: doc._meta.directory.replace(/.*\//, "") as
        | "japanese"
        | "romaji"
        | "english",
      mdx,
    };
  },
});

export default defineConfig({
  collections: [post, member, lyrics],
});
