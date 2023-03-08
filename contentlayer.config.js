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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
