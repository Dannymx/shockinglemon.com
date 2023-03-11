"use client";

import { useState } from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "@/components/Band/band.module.css";

import type { Member } from "@/.contentlayer/generated";

type Props = {
  bios: Member[];
  reversed: boolean;
};

const MemberMarkdown = ({ content }: { content: string }) => {
  const MDX = useMDXComponent(content);

  return <MDX />;
};

const MemberContent = ({ bios, reversed }: Props) => {
  const [language, setLanguage] = useState("en");
  const member = bios.find((bio) => bio.language === language);

  if (!member) return <p>Member not found.</p>;

  const memberName = member.name.split("/");

  return (
    <>
      <div className="relative -mb-10 flex aspect-[1/1] w-11/12 shrink-0 overflow-hidden rounded-xl shadow-md shadow-slate-500 sm:mb-0 sm:mt-8 sm:aspect-[1/2] sm:h-auto sm:w-1/3 md:w-1/4 lg:m-0">
        <Image
          className="object-cover object-top sm:object-center"
          alt={member.name}
          src={member.image}
          fill
        />
      </div>
      <div
        className={`flex flex-col rounded-md bg-white/75 p-6 pt-14 shadow-md shadow-slate-500/25 sm:pt-6 ${
          reversed ? "sm:-mr-6 sm:pr-12" : "sm:-ml-6 sm:pl-12"
        }`}
      >
        <div className="mb-4 flex flex-col justify-between md:mb-2 md:flex-row">
          <h2 className="text-xl md:text-2xl lg:text-3xl">
            <span className="font-bebas">{memberName.at(0)?.trim()}</span>
            <span className=""> / </span>
            <span className="font-noto">{memberName.at(1)?.trim()}</span>
          </h2>
          <div className="flex flex-row items-center gap-2 text-xs md:text-base">
            <button
              type="button"
              className={
                language === "en" ? "underline underline-offset-4" : ""
              }
              onClick={() => setLanguage("en")}
            >
              English
            </button>
            <span>|</span>
            <button
              type="button"
              className={
                language === "jp" ? "underline underline-offset-4" : ""
              }
              onClick={() => setLanguage("jp")}
            >
              日本語
            </button>
          </div>
        </div>
        <div
          className={`columns-2 text-xs sm:text-sm md:text-base ${
            styles.member
          } ${language === "jp" ? "font-noto" : null}`}
        >
          <MemberMarkdown content={member.body.code} />
        </div>
      </div>
    </>
  );
};

export default MemberContent;
