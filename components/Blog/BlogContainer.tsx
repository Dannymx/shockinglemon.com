import Link from "next/link";
import type { ReactNode } from "react";

import type { Post } from "@/.contentlayer/generated";
import { formatDate, slugify } from "@/lib/utils";

interface Props {
  post: Post;
  children: ReactNode;
}

const BlogContainer = ({ post, children }: Props) => (
  <div
    // eslint-disable-next-line no-underscore-dangle
    key={post._id}
    className="rounded-xl bg-slate-100 p-6 shadow-md shadow-slate-500/25"
  >
    <div className="mb-2 border-b border-b-slate-300 pb-2">
      <h1 className="font-bebas text-2xl">
        <Link href={`/blog/${slugify(post.title)}`}>{post.title}</Link>
      </h1>
      <time className="block text-sm text-slate-600" dateTime={post.date}>
        Published on {formatDate(post.date)}
      </time>
    </div>
    <div>{children}</div>
  </div>
);

export default BlogContainer;
