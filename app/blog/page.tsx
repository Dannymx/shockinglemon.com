import { compareDesc } from "date-fns";
import type { Metadata } from "next";

import { allPosts } from "@/.contentlayer/generated";
import BlogContent from "@/components/Blog/BlogContent";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  ...(OpenGraphConfig.blog ?? null),
};

export default function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      {posts.map((post) => (
        <div
          // eslint-disable-next-line no-underscore-dangle
          key={post._id}
          className="rounded-xl bg-slate-100 p-6 shadow-md shadow-slate-500/25"
        >
          <div className="mb-2 border-b border-b-slate-300 pb-2">
            <h1 className="font-bebas text-2xl">{post.title}</h1>
            <time dateTime={post.date} className="block text-sm text-slate-600">
              Published on {formatDate(post.date)}
            </time>
          </div>
          <div>
            <BlogContent content={post.body.code} />
          </div>
        </div>
      ))}
    </div>
  );
}
