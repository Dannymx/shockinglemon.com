import { Row } from "components/Music/Details";
import Gallery from "components/Music/Gallery";
import styles from "components/Music/music.module.css";
import type { Record } from "components/Music/types";
import { allLyrics } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import music from "@/content/music/music.json";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { findRecord, formatDate, slugify } from "@/lib/utils";

// Build a set of song slugs that have lyrics
const songsWithLyrics = new Set(allLyrics.map((lyric) => lyric.songSlug));

export const dynamicParams = false;

interface Props {
  params: Promise<{
    title: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { title } = await params;

  const record = findRecord(title);

  if (record) {
    const description = `${record.name.en} is a ${
      record.format
    } released in ${formatDate(record.release)} and includes ${
      record.songs.length
    } songs. Published by ${record.labels.join(", ")} in ${record.medium.join(
      ", ",
    )} format.`;

    return {
      title: `${record.name.en} by Shocking Lemon, ${record.songs.length} songs`,
      description,
      ...(typeof OpenGraphConfig.record === "function"
        ? OpenGraphConfig.record({
            name: record.name.en,
            slug: record.slug,
            openGraph: {
              description,
            },
          })
        : null),
    };
  }

  return {};
};

export default async function Page({ params }: Props) {
  const { title } = await params;

  const album = findRecord(title);

  if (!album) return <h1>Album not found</h1>;

  return (
    <div
      className={`
        flex flex-col gap-4
        lg:flex-row
      `}
    >
      {/* left column */}
      <div
        className={`
          flex flex-row items-start
          lg:w-1/3
        `}
      >
        <div
          className={`
            ${styles["sleeve-text"]}
            hidden pr-4 font-noto text-xl font-bold
            lg:block
          `}
        >
          {album.name.jp}
        </div>
        <Gallery album={album} />
      </div>

      {/* right column */}
      <div className="lg:w-2/3">
        {/* Album details */}
        <div className="w-full sl-content-box pb-0">
          <h1
            className={`
              border-b border-border pb-4 font-bauhaus text-2xl font-bold
            `}
          >
            {album.name.en}
          </h1>
          <table
            className={`
              w-full table-auto border-collapse text-sm
              md:text-base
            `}
          >
            <tbody>
              <Row text="Release date" value={album.release} />
              <Row
                text="Price"
                value={`${album.price.price} ${album.price.currency}`}
              />
              <Row text="Format" value={album.format} />
              <Row text="Medium" value={album.medium.join(", ")} />
              <Row text="Labels" value={album.labels.join(", ")} />
              <Row text="Catalog" value={album.catalog} />
              <Row text="Barcode" value={album.barcode} />

              <tr>
                <td
                  colSpan={2}
                  className={`
                    ${styles.cell}
                    border-t-2 border-t-border font-bold
                  `}
                >
                  Tracks
                </td>
              </tr>
              {album.songs.map((song) => {
                const songSlug = slugify(song.name);
                const hasLyrics = songsWithLyrics.has(songSlug);

                return (
                  <Row
                    key={song.name}
                    text={song.name}
                    value={
                      <span className="flex items-center justify-between gap-2">
                        <span>{song.length}</span>
                        {hasLyrics ? (
                          <Link
                            className={buttonVariants({
                              variant: "outline",
                              size: "sm",
                            })}
                            href={
                              `/music/${album.slug}/lyrics/${songSlug}` as "/music"
                            }
                          >
                            Lyrics
                          </Link>
                        ) : null}
                      </span>
                    }
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return music.records.map((album: Record) => ({
    title: album.slug,
  }));
}
