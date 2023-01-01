import music from "json/music.json";
import Cover from "components/Music/Cover";
import type { Record } from "./types";

const Page = () => (
  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {music.records.map((album: Record) => (
      <div key={album.slug}>
        <Cover album={album} />
        <h4 className="pt-2 text-center">{album.name}</h4>
      </div>
    ))}
  </div>
);

export default Page;
