import { compareDesc } from "date-fns";
import type { Metadata } from "next";

import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/components/mdx";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      {posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={post._id}>
          <h1>{post.title}</h1>
          <Mdx code={post.body.code} />
        </div>
      ))}
    </div>
  );
}
