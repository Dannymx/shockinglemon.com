"use client";

import { useState } from "react";
import Cover from "./Cover";
import GalleryGrid from "./GalleryGrid";
import GallerySelected from "./GallerySelected";
import type { Record } from "./types";

type GalleryProps = {
  album: Record;
};

const Gallery = ({ album }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState("cover.jpg");

  return (
    <div className="flex grow flex-col gap-4 sm:flex-row lg:flex-col">
      <div className="flex w-full flex-col gap-4 sm:w-1/2 lg:w-full">
        <Cover album={album} activeImage={activeImage} />
        {album.images.cover || album.images.other.length ? (
          <GallerySelected album={album} activeImage={activeImage} />
        ) : null}
      </div>
      <div className="w-full sm:w-1/2 lg:w-full">
        {album.images.other.length ? (
          <GalleryGrid
            album={album}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
        ) : (
          <p className="text-center">No images found for this record</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
