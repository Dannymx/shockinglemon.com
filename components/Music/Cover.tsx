import Image from "next/image";
import type { Record } from "components/Music/types";
import styles from "./music.module.css";

type Props = {
  album: Record;
  sizes?: string;
};

const Cover = ({ album, sizes }: Props) => {
  if (album.images.cover) {
    return (
      <div className={`${styles.cover} ${styles["cover-border"]}`}>
        <Image
          className="object-cover"
          src={`/assets/images/music/${album.slug}/cover.jpg`}
          alt={`Cover of ${album.name.en}`}
          fill
          sizes={sizes ?? `(min-width: 768px) 20vw, 50vw`}
        />
      </div>
    );
  }

  return (
    <div
      className={`${styles.cover} ${styles["cover-border"]} items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 text-8xl`}
    >
      🍋
    </div>
  );
};

export default Cover;
