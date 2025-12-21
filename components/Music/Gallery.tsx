"use client";

import { useState } from "react";

import Cover from "./Cover";
import GalleryGrid from "./GalleryGrid";
import GallerySelected from "./GallerySelected";
import type { Record } from "./types";

interface GalleryProps {
  album: Record;
}

const Gallery = ({ album }: GalleryProps) => {
  // By default the cover image is cover.jpg
  const [activeImage, setActiveImage] = useState("cover.jpg");

  return (
    <div
      className={`
        flex grow flex-col gap-4
        sm:flex-row
        lg:flex-col
      `}
    >
      <div
        className={`
          flex w-full flex-col gap-4
          sm:w-1/2
          lg:w-full
        `}
      >
        <Cover activeImage={activeImage} album={album} />
        {album.images.cover || album.images.other.length ? (
          <GallerySelected activeImage={activeImage} album={album} />
        ) : null}
      </div>
      <div
        className={`
          w-full
          sm:w-1/2
          lg:w-full
        `}
      >
        {album.images.other.length ? (
          <GalleryGrid
            activeImage={activeImage}
            album={album}
            setActiveImage={setActiveImage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Gallery;
