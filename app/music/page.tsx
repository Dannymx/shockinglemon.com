import music from "content/music/music.json";
import type { Metadata } from "next";
import Link from "next/link";
import Cover from "components/Music/Cover";
import type { Record } from "components/Music/types";

import { OpenGraphConfig } from "@/lib/AppConfig";

export const metadata: Metadata = {
  title: "Music",
  ...(OpenGraphConfig.music ?? null),
};

const Page = () => (
  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {music.records
      .sort((a, b) => (a.release < b.release ? 1 : -1))
      .map((album: Record) => (
        <div key={album.slug}>
          <Link href={`/music/${album.slug}`}>
            <Cover
              album={album}
              sizes="(min-width:1536px) 20vw, (min-width:1024px) 30vw, 25vw"
            />
          </Link>
          <h4 className="pt-2 text-center text-sm lg:text-base">
            <Link href={`/music/${album.slug}`}>{album.name.en}</Link>
          </h4>
        </div>
      ))}
  </div>
);

export default Page;
