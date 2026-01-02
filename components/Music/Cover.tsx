import type { Record } from "components/Music/types";
import Image from "next/image";

import styles from "./music.module.css";

interface Props {
  album: Record;
  sizes?: string;
  activeImage?: string;
}

const Cover = ({ album, sizes, activeImage }: Props) => {
  if (!album.images.cover) {
    return (
      <div
        className={`
          ${styles.cover}
          ${styles["cover-border"]}
          items-center justify-center sl-media-box bg-linear-to-br from-cyan-500
          to-blue-500 text-8xl
        `}
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
      className={`
        ${styles.cover}
        sl-media-box
        ${
          !activeImage || activeImage === "cover.jpg"
            ? styles["cover-border"]
            : ""
        }
      `}
    >
      <Image
        fill
        alt={`Cover of ${album.name.en}`}
        sizes={sizes ?? `(min-width: 768px) 20vw, 50vw`}
        src={imgSrc}
        className={
          !activeImage || activeImage === "cover.jpg"
            ? "object-cover"
            : "object-contain drop-shadow-[0_2px_6px_rgba(100,116,139,1)]"
        }
      />
    </div>
  );
};

export default Cover;
