import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";

type MdxProps = {
  code: string;
};

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
};

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};

export default Mdx;
