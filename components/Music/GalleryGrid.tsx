import type { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import type { Record } from "./types";

type GridProps = {
  album: Record;
  activeImage: string;
  setActiveImage: Dispatch<SetStateAction<string>>;
};

const GalleryGrid = ({ album, activeImage, setActiveImage }: GridProps) => (
  <div className="grid grid-cols-4 gap-2 lg:grid-cols-3">
    {album.images.other.map((image, i) => (
      <button
        type="button"
        key={image}
        className={`relative flex aspect-square grow border-2 ${
          activeImage === image ? "border-slate-600" : "border-transparent"
        }`}
        onClick={() => setActiveImage(image)}
      >
        <Image
          className="border border-slate-500 object-contain"
          src={`/assets/images/music/${album.slug}/${image}`}
          alt={`Image #${i + 1} of ${album.name.en}`}
          fill
          sizes="100px"
        />
      </button>
    ))}
  </div>
);
export default GalleryGrid;
