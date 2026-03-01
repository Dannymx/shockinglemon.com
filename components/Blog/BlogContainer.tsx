import type { Post } from "content-collections";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn, formatDate, slugify } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  post: Post;
  children: ReactNode;
}

const BlogContainer = ({ post, children, className }: Props) => (
  <div
    // eslint-disable-next-line no-underscore-dangle
    key={post._id}
    className={cn("sl-content-box", className)}
  >
    <div className="mb-2 border-b border-b-border pb-2">
      <h1 className="font-bebas text-2xl">
        <Link href={`/blog/${slugify(post.title)}`}>{post.title}</Link>
      </h1>
      <time
        className="block text-sm text-muted-foreground"
        dateTime={post.date}
      >
        Published on {formatDate(post.date)}
      </time>
    </div>
    <div>{children}</div>
  </div>
);

export default BlogContainer;
