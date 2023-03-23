import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the Blog post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date when the post was created",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      description: "Image that will be used in OG cards",
    },
    author: {
      type: "string",
      required: true,
    },
  },
}));

export const Member = defineDocumentType(() => ({
  name: "Member",
  filePathPattern: "band/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "Name of the memmber",
      required: true,
    },
    image: {
      type: "string",
      description: "Image that will be used in OG cards",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      // eslint-disable-next-line no-underscore-dangle
      resolve: (doc) => doc._raw.sourceFileName.replace(/(\.[^.]+){1}$/, ""),
    },
    language: {
      type: "string",
      resolve: (doc) =>
        // eslint-disable-next-line no-underscore-dangle
        doc._raw.sourceFileDir.replace(/.*\//, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Member],
});
