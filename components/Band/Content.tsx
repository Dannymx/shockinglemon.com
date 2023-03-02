"use client";

import { useState } from "react";
import styles from "components/Band/band.module.css";

type Props = {
  name: {
    en: string;
    jp: string;
  };
  content: ContentLanguages;
};

type ContentLanguages = {
  en: JSX.Element;
  jp: JSX.Element;
};

const Content = ({ name, content }: Props) => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <div className="mb-4 flex flex-col justify-between md:mb-2 md:flex-row">
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          <span className="font-bebas">{name.en}</span>
          <span className=""> / </span>
          <span className="font-noto">{name.jp}</span>
        </h2>
        <div className="flex flex-row items-center gap-2 text-xs md:text-base">
          <button
            type="button"
            className={language === "en" ? "underline underline-offset-4" : ""}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <span>|</span>
          <button
            type="button"
            className={language === "jp" ? "underline underline-offset-4" : ""}
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
        {content[language as keyof ContentLanguages]}
      </div>
    </>
  );
};

export default Content;
