import Image from "next/image";
import type { Record } from "components/Music/types";
import styles from "./music.module.css";

type Props = {
  album: Record;
  sizes?: string;
  activeImage?: string;
};

const Cover = ({ album, sizes, activeImage }: Props) => {
  if (!album.images.cover) {
    return (
      <div
        className={`${styles.cover} ${styles["cover-border"]} items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 text-8xl`}
      >
        🍋
      </div>
    );
  }

  const imgSrc = `/assets/images/music/${album.slug}/${
    activeImage ?? "cover.jpg"
  }`;

  return (
    <div
      className={`${styles.cover} ${
        !activeImage || activeImage === "cover.jpg"
          ? styles["cover-border"]
          : ""
      }`}
    >
      <Image
        className={
          !activeImage || activeImage === "cover.jpg"
            ? "object-cover"
            : "object-contain drop-shadow-[0_2px_6px_rgba(100,116,139,1)]"
        }
        src={imgSrc}
        alt={`Cover of ${album.name.en}`}
        fill
        sizes={sizes ?? `(min-width: 768px) 20vw, 50vw`}
      />
    </div>
  );
};

export default Cover;
