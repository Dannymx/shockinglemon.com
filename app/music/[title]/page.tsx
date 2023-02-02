import music from "json/music.json";
import Image from "next/image";
import Cover from "components/Music/Cover";
import { Row } from "components/Music/Details";
import styles from "components/Music/music.module.css";
import type { Record } from "components/Music/types";

export const dynamicParams = false;

type Params = {
  params: {
    title: string;
  };
};

const Page = ({ params }: Params) => {
  const { title } = params;

  const album = music.records.find((record: Record) => record.slug === title);

  if (!album) return <h1>Album not found</h1>;

  return (
    <div className="flex gap-4">
      {/* left column */}
      <div className="flex w-1/3 flex-row items-start">
        <div
          className={`${styles["sleeve-text"]} pr-4 font-noto text-xl font-bold`}
        >
          {album.name.jp}
        </div>
        <div className="flex grow flex-col gap-4 divide-y-2">
          {/* cover */}
          <Cover album={album} sizes="20vw" />
          {/* extra images */}
          {album.images.other.length ? (
            <div className="grid grid-cols-3 gap-2">
              {album.images.other.map((image, i) => (
                <div key={image} className="relative flex aspect-square grow">
                  <Image
                    className="border border-slate-500 object-contain"
                    src={`/assets/images/music/${album.slug}/${image}`}
                    alt={`Image #${i + 1} of ${album.name.en}`}
                    fill
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* right column */}
      <div className="grow">
        <div className="w-full rounded-xl bg-slate-100 p-4 pb-0 shadow-md shadow-slate-500">
          <h1 className="border-b border-slate-200 pb-4 font-bauhaus text-2xl font-bold">
            {album.name.en}
          </h1>
          <div>
            <table className="w-full table-auto border-collapse text-sm">
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
                  <td colSpan={2} className={`${styles.cell}`}>
                    Tracks
                  </td>
                </tr>
                {album.songs.map((song) => (
                  <Row key={song.name} text={song.name} value={song.length} />
                ))}
              </tbody>
            </table>

            {/* <table className="mt-4 w-full table-auto border-collapse text-sm">
              <tbody>
                <tr>
                  <td colSpan={2} className={styles.cell}>
                    Tracks
                  </td>
                </tr>
                {album.songs.map((song) => (
                  <Row key={song.name} text={song.name} value={song.length} />
                ))}
              </tbody>
            </table> */}
          </div>
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
