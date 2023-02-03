"use client";

import { useState } from "react";
import Cover from "./Cover";
import GalleryGrid from "./GalleryGrid";
import type { Record } from "./types";

type GalleryProps = {
  album: Record;
};

export type ActiveImage = { id: number; file: string };

const Gallery = ({ album }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState<ActiveImage>({
    id: 0,
    file: "cover.jpg",
  });

  return (
    <>
      <Cover album={album} sizes="20vw" activeImage={activeImage} />
      <GalleryGrid
        album={album}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </>
  );
};

export default Gallery;
