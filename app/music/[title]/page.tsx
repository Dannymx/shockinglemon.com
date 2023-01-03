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
      <div className="w-1/3">
        <div
          className={`relative aspect-square overflow-hidden ${styles["cover-border"]}`}
        >
          <Image
            className="object-cover"
            src={`/assets/images/music/${album.slug}/cover.jpg`}
            alt={`Cover of ${album.name}`}
            fill
          />
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
