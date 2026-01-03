"use client";

import { useMDXComponent } from "@content-collections/mdx/react";
import type { MDXComponents } from "mdx/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  p: ({ className, ...props }) => (
    <p
      className={cn(
        `
          leading-relaxed whitespace-pre-wrap
          not-last:mb-4
        `,
        className,
      )}
      {...props}
    />
  ),
};

const LyricsContent = ({ content }: { content: string }) => {
  const MDX = useMDXComponent(content);

  return <MDX components={components} />;
};

const languageLabels: Record<string, string> = {
  japanese: "日本語",
  romaji: "Romaji",
  english: "English",
};

const languageOrder = ["japanese", "romaji", "english"] as const;

interface LyricsEntry {
  language: "japanese" | "romaji" | "english";
  mdx: string;
}

interface LyricsTabsProps {
  lyrics: LyricsEntry[];
}

export default function LyricsTabs({ lyrics }: LyricsTabsProps) {
  const availableLanguages = languageOrder.filter((lang) =>
    lyrics.some((lyric) => lyric.language === lang),
  );

  const defaultLanguage = availableLanguages[0];

  if (!defaultLanguage) return <p>No lyrics available.</p>;

  return (
    <Tabs defaultValue={defaultLanguage}>
      <TabsList className="mb-4">
        {availableLanguages.map((lang) => (
          <TabsTrigger key={lang} value={lang}>
            {languageLabels[lang]}
          </TabsTrigger>
        ))}
      </TabsList>

      {availableLanguages.map((lang) => {
        const lyric = lyrics.find((l) => l.language === lang);
        if (!lyric) return null;

        return (
          <TabsContent
            key={lang}
            className={lang === "japanese" ? "font-noto" : ""}
            value={lang}
          >
            <LyricsContent content={lyric.mdx} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
