import { allLyrics } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";

import LyricsTabs from "@/components/Music/LyricsTabs";
import type { Record, Song } from "@/components/Music/types";
import { buttonVariants } from "@/components/ui/button";
import music from "@/content/music/music.json";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { slugify } from "@/lib/utils";

export const dynamicParams = false;

interface Props {
  params: Promise<{
    title: string;
    song: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { title, song } = await params;

  const album = music.records.find((record: Record) => record.slug === title);

  if (!album) return {};

  const songData = album.songs.find((s: Song) => slugify(s.name) === song);

  if (!songData) return {};

  const songLyrics = allLyrics.filter((lyric) => lyric.songSlug === song);
  const languages = songLyrics.map((l) => l.language).join(", ");

  const description = `Lyrics for ${songData.name} from the album "${album.name.en}" by Shocking Lemon. Available in ${languages}.`;

  return {
    title: `Lyrics for ${songData.name}`,
    description,
    ...(typeof OpenGraphConfig.lyrics === "function"
      ? OpenGraphConfig.lyrics({
          name: songData.name,
          songSlug: song,
          albumSlug: title,
          openGraph: {
            description,
          },
        })
      : null),
  };
};

export default async function LyricsPage({ params }: Props) {
  const { title, song } = await params;

  const album = music.records.find((record: Record) => record.slug === title);

  if (!album) return <h1>Album not found</h1>;

  const songData = album.songs.find((s: Song) => slugify(s.name) === song);

  if (!songData) return <h1>Song not found</h1>;

  const songLyrics = allLyrics
    .filter((lyric) => lyric.songSlug === song)
    .map((lyric) => ({
      language: lyric.language,
      mdx: lyric.mdx,
    }));

  if (songLyrics.length === 0) return <h1>No lyrics available</h1>;

  return (
    <div className="sl-content-box">
      <div className="mb-4 flex items-center gap-4 border-b border-border pb-4">
        <Link
          className={buttonVariants({ variant: "outline", size: "sm" })}
          href={`/music/${title}` as "/music"}
        >
          ← Back to album
        </Link>
      </div>

      <h1 className="mb-2 font-bauhaus text-2xl font-bold">
        Lyrics for {songData.name}
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        From the album &ldquo;{album.name.en}&rdquo;
      </p>

      <LyricsTabs lyrics={songLyrics} />
    </div>
  );
}

export async function generateStaticParams() {
  // Get all unique song slugs that have lyrics
  const songsWithLyrics = new Set(allLyrics.map((lyric) => lyric.songSlug));

  // For each album, find tracks that have lyrics
  return music.records.flatMap((album: Record) =>
    album.songs
      .map((song: Song) => ({
        title: album.slug,
        song: slugify(song.name),
      }))
      .filter((param) => songsWithLyrics.has(param.song)),
  );
}
