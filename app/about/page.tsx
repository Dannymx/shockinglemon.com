import Content from "content/about/about.mdx";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";

import { OpenGraphConfig } from "@/lib/AppConfig";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p className={cn("leading-7 mb-4", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("mb-4 list-disc list-inside", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className={cn("font-bold", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      className={cn(
        "text-2xl font-bebas [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
};

export const metadata: Metadata = {
  title: "About",
  ...(OpenGraphConfig.about ?? null),
};

export default function About() {
  return (
    <div className="rounded-xl bg-slate-100 p-6 shadow-md shadow-slate-500/25">
      {/* <div className="mb-2 border-b border-b-slate-300 pb-2">
        <h1 className="font-bebas text-2xl">About Us</h1>
      </div> */}
      <div>
        <Content components={components} />
      </div>
    </div>
  );
}
