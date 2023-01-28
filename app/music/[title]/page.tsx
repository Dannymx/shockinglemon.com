import music from "json/music.json";
import Image from "next/image";
import styles from "components/Music/music.module.css";
import type { Record } from "components/Music/types";

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
    <div>
      {/* left column */}
      <div className="flex w-1/3 flex-row items-start">
        <div
          className={`${styles["sleeve-text"]} pr-4 font-noto text-xl font-bold`}
        >
          {album.name.jp}
        </div>
        <div className="flex grow flex-col gap-4 divide-y-2">
          {/* Cover */}
          <div
            className={`relative flex aspect-square grow overflow-hidden ${styles["cover-border"]}`}
          >
            <Image
              className="object-cover"
              src={`/assets/images/music/${album.slug}/cover.jpg`}
              alt={`Cover of ${album.name.en}`}
              fill
            />
          </div>
          {/* Images */}
          {album.images.other.length ? (
            <div className="grid grid-cols-3 gap-2">
              {album.images.other.map((image, i) => (
                <div key={image} className="relative flex aspect-square grow">
                  <Image
                    className="border border-slate-500 object-contain"
                    src={`/assets/images/music/${album.slug}/${image}`}
                    alt={`Image #${i + 1} of ${album.name.en}`}
                    fill
                  />
                </div>
              ))}
            </div>
          ) : null}
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
