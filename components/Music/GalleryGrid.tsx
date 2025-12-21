import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

import type { Record } from "./types";

interface GridProps {
  album: Record;
  activeImage: string;
  setActiveImage: Dispatch<SetStateAction<string>>;
}

const GalleryGrid = ({ album, activeImage, setActiveImage }: GridProps) => (
  <div className="grid grid-cols-4 gap-2 lg:grid-cols-3">
    {album.images.other.map((image, i) => (
      <button
        key={image}
        onClick={() => setActiveImage(image)}
        type="button"
        className={`relative flex aspect-square grow border-2 ${
          activeImage === image ? "border-slate-600" : "border-transparent"
        }`}
      >
        <Image
          fill
          alt={`Image #${i + 1} of ${album.name.en}`}
          className="border border-slate-500 object-contain"
          sizes="100px"
          src={`/assets/images/music/${album.slug}/${image}`}
        />
      </button>
    ))}
  </div>
);
export default GalleryGrid;
