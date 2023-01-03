import Image from "next/image";
import Link from "next/link";
import type { Record } from "components/Music/types";
import styles from "./music.module.css";

const Cover = ({ album }: { album: Record }) => {
  if (album.images.cover) {
    return (
      <Link
        className={`${styles.cover} ${styles["cover-border"]}`}
        href={`/music/${album.slug}`}
      >
        <Image
          className="object-cover"
          src={`/assets/images/music/${album.slug}/cover.jpg`}
          alt={`Cover of ${album.name}`}
          fill
          sizes="(min-width: 768px) 20vw, 50vw"
        />
      </Link>
    );
  }

  return (
    <Link
      className={`${styles.cover} ${styles["cover-border"]} items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 text-8xl`}
      href={`/music/${album.slug}`}
    >
      🍋
    </Link>
  );
};

export default Cover;
