import type { Metadata } from "next";
import Link from "next/link";
import { Row } from "components/Music/Details";
import Gallery from "components/Music/Gallery";
import styles from "components/Music/music.module.css";
import type { Record } from "components/Music/types";

import music from "@/content/music/music.json";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { findRecord, formatDate } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: Promise<{
    title: string;
  }>;
};

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
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* left column */}
      <div className="flex flex-row items-start lg:w-1/3">
        <div
          className={`${styles["sleeve-text"]} hidden pr-4 font-noto text-xl font-bold lg:block`}
        >
          {album.name.jp}
        </div>
        <Gallery album={album} />
      </div>

      {/* right column */}
      <div className="lg:w-2/3">
        {/* Album details */}
        <div className="w-full rounded-xl bg-slate-100 p-4 pb-0 shadow-md shadow-slate-500/25">
          <h1 className="border-b border-slate-200 pb-4 font-bauhaus text-2xl font-bold">
            {album.name.en}
          </h1>
          <table className="w-full table-auto border-collapse text-sm md:text-base">
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
                  className={`${styles.cell} border-t-2 border-t-slate-300 font-bold`}
                >
                  Tracks
                </td>
              </tr>
              {album.songs.map((song) => (
                <Row key={song.name} text={song.name} value={song.length} />
              ))}
            </tbody>
          </table>
        </div>
        {/* Lyrics */}
        <div className="mt-4 rounded-xl bg-slate-100 p-4 shadow-md shadow-slate-500/25">
          <h1 className="mb-4 border-b border-b-slate-300 pb-2 font-bebas text-2xl">
            Lyrics
          </h1>
          <div>
            <p>Sorry, currently we only have the lyrics in image format.</p>
            <p>
              Want to contribute and help transcribe to text or translate the
              lyrics?{" "}
              <Link href="/about" className="font-bold hover:underline">
                Learn how to contribute here.
              </Link>
            </p>
          </div>
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
