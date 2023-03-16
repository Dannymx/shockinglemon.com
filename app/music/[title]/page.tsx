import type { Metadata } from "next";
import { Row } from "components/Music/Details";
import Gallery from "components/Music/Gallery";
import styles from "components/Music/music.module.css";
import type { Record } from "components/Music/types";

import music from "@/content/music/music.json";
import { OpenGraphConfig } from "@/lib/AppConfig";
import { findRecord } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: {
    title: string;
  };
};

export const generateMetadata = async ({
  params: { title },
}: Props): Promise<Metadata> => {
  const record = findRecord(title);

  if (record) {
    return {
      title: findRecord(title)?.name.en,
      ...(typeof OpenGraphConfig.record === "function"
        ? OpenGraphConfig.record({
            name: record.name.en,
            slug: record.slug,
          })
        : null),
    };
  }

  return {};
};

const Page = ({ params: { title } }: Props) => {
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
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return music.records.map((album: Record) => ({
    title: album.slug,
  }));
}

export default Page;
