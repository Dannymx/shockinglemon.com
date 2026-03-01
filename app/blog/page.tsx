import { allPosts } from "content-collections";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";

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
    <div
      className="
        grid grid-cols-1 gap-4
        md:grid-cols-2
      "
    >
      {posts.map((post, index) => {
        const hasExcerpt = !!post.excerptMdx;

        return (
          <BlogContainer
            key={slugify(post.title)}
            post={post}
            className={
              index === 0
                ? "col-span-2"
                : `
                  col-span-2
                  md:col-span-1
                `
            }
          >
            <BlogContent content={hasExcerpt ? post.excerptMdx! : post.mdx} />
            {!!hasExcerpt && (
              <div className="mt-6">
                <Link
                  href={`/blog/${slugify(post.title)}`}
                  className="
                    inline-block rounded-sm bg-primary px-4 py-2 text-sm
                    font-semibold text-primary-foreground transition-colors
                    hover:bg-primary/90
                  "
                >
                  Continue reading
                </Link>
              </div>
            )}
          </BlogContainer>
        );
      })}
    </div>
  );
}
