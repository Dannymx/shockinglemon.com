"use client";

import { useMDXComponent } from "@content-collections/mdx/react";
import type { Member } from "content-collections";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { cn, getMemberName } from "@/lib/utils";

interface Props {
  bios: Member[];
  reversed?: boolean;
}

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p className={cn("mb-2 break-before-avoid", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("list-inside list-none", className)} {...props} />
  ),
  h1: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h1 className={cn("font-bold", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3 className={cn("font-bold", className)} {...props} />
  ),
};

const MemberMarkdown = ({ content }: { content: string }) => {
  const MDX = useMDXComponent(content);

  return <MDX components={components} />;
};

const MemberContent = ({ bios, reversed = false }: Props) => {
  const [language, setLanguage] = useState("en");
  const member = bios.find((bio) => bio.language === language);

  if (!member) return <p>Member not found.</p>;

  return (
    <React.Fragment>
      <div
        className={`
          relative -mb-10 flex aspect-square w-11/12 shrink-0 sl-media-box
          sm:mt-8 sm:mb-0 sm:aspect-1/2 sm:h-auto sm:w-1/3
          md:w-1/4
          lg:m-0
        `}
      >
        <Image
          fill
          alt={member.name}
          src={member.image}
          className={`
            object-cover object-top
            sm:object-center
          `}
        />
      </div>
      <div
        className={`
          flex flex-col sl-glass-box p-4 pt-14
          sm:pt-6
          ${reversed ? "sm:-mr-6 sm:pr-12" : "sm:-ml-6 sm:pl-12"}
        `}
      >
        <div
          className={`
            mb-4 flex flex-col justify-between
            md:mb-2 md:flex-row
          `}
        >
          <h2
            className={`
              text-xl
              md:text-2xl
              lg:text-3xl
            `}
          >
            <Link href={`/band/${member.slug}`}>
              <span className="font-bebas">{getMemberName(member).at(0)}</span>
              <span className=""> / </span>
              <span className="font-noto">{getMemberName(member).at(1)}</span>
            </Link>
          </h2>
          <div
            className={`
              flex flex-row items-center gap-2 text-sm
              md:text-base
            `}
          >
            <button
              onClick={() => setLanguage("en")}
              type="button"
              className={
                language === "en" ? "underline underline-offset-4" : ""
              }
            >
              English
            </button>
            <span>|</span>
            <button
              onClick={() => setLanguage("jp")}
              type="button"
              className={
                language === "jp" ? "underline underline-offset-4" : ""
              }
            >
              日本語
            </button>
          </div>
        </div>
        <div
          className={`
            columns-2 text-sm
            md:text-base
            ${language === "jp" ? "font-noto" : null}
          `}
        >
          <MemberMarkdown content={member.mdx} />
        </div>
        <div className="mt-2 border-t border-t-border pt-2 text-xs">
          Disclaimer: some of the content might contain grammar or spelling
          mistakes as it was copied as originally written by the author.
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberContent;
