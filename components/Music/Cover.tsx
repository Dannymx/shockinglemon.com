import Image from "next/image";
import type { Record } from "components/Music/types";
import styles from "./music.module.css";

type Props = {
  album: Record;
  sizes?: string;
  activeImage?: string;
};

const Cover = ({ album, sizes, activeImage }: Props) => {
  if (album.images.cover) {
    const imgSrc = `/assets/images/music/${album.slug}/${
      activeImage ?? "cover.jpg"
    }`;

    return (
      <div className={`${styles.cover} ${styles["cover-border"]}`}>
        <Image
          className={`${activeImage ? "object-contain" : "object-cover"}`}
          src={imgSrc}
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
