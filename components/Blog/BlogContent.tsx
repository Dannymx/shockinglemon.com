import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
};

const BlogContent = ({ content }: { content: string }) => {
  const MDX = useMDXComponent(content);

  return <MDX components={components} />;
};

export default BlogContent;
