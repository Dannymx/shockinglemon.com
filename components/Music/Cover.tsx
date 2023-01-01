import type { Record } from "app/music/types";
import Image from "next/image";
import Link from "next/link";

const Cover = ({ album }: { album: Record }) => {
  const styles =
    "relative flex aspect-square overflow-hidden rounded-xl border-2 border-slate-400 shadow-2xl";

  if (album.images.cover) {
    return (
      <Link className={styles} href={`/music/${album.slug}`}>
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
      className={`${styles} items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 text-8xl`}
      href={`/music/${album.slug}`}
    >
      🍋
    </Link>
  );
};

export default Cover;
