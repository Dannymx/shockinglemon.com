import Content from "content/about/about.mdx";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";

import { OpenGraphConfig } from "@/lib/OpenGraph";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p className={cn("mb-4 leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("mb-4 list-inside list-disc", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className={cn("font-bold", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      className={cn(
        `
          font-bebas text-2xl
          not-first:mt-6
        `,
        className,
      )}
      {...props}
    />
  ),
};

export const metadata: Metadata = {
  title: "About our website and how to contribute",
  ...(OpenGraphConfig.about ?? null),
};

export default function About() {
  return (
    <div className="sl-content-box">
      {/* <div className="mb-2 border-b border-b-slate-300 pb-2">
        <h1 className="font-bebas text-2xl">About Us</h1>
      </div> */}
      <div>
        <Content components={components} />
      </div>
    </div>
  );
}
