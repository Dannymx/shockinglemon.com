import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { cn } from "@/lib/utils";

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:last-child)]:mb-6", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className={cn("font-bold hover:underline", className)} {...props} />
  ),
};

const BlogContent = ({ content }: { content: string }) => {
  const MDX = useMDXComponent(content);

  return <MDX components={components} />;
};

export default BlogContent;
