import { allPosts } from "content-collections";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";

import BlogContainer from "@/components/Blog/BlogContainer";
import BlogContent from "@/components/Blog/BlogContent";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog with the latest news about Shocking Lemon",
  ...(OpenGraphConfig.blog ?? null),
};

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <BlogContainer key={slugify(post.title)} post={post}>
          <BlogContent content={post.mdx} />
        </BlogContainer>
      ))}
    </div>
  );
}
