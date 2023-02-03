import type { Dispatch, SetStateAction } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import imgixLoader from "lib/imageLoader";
import Image from "next/image";
import type { ActiveImage } from "./Gallery";
import type { Record } from "./types";

type GridProps = {
  album: Record;
  activeImage: ActiveImage;
  setActiveImage: Dispatch<SetStateAction<ActiveImage>>;
};

const GalleryGrid = ({ album, activeImage, setActiveImage }: GridProps) => {
  if (!album.images.other.length) return <p>No images found for this record</p>;

  const imgSrc = imgixLoader({
    src: `/assets/images/music/${album.slug}/${album.images.other.at(
      activeImage.id
    )}`,
    width: "1.0",
  });

  return (
    <>
      <div className="flex justify-between text-xs">
        <span>{activeImage.file}</span>
        <a
          href={imgSrc}
          className="flex justify-end"
          target="_blank"
          rel="noreferrer"
        >
          View full size{" "}
          <ArrowTopRightOnSquareIcon className="ml-2 inline h-4" />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {album.images.other.map((image, i) => (
          <button
            type="button"
            key={image}
            className={`relative flex aspect-square grow border-2 ${
              activeImage.id === i ? "border-slate-600" : "border-transparent"
            }`}
            onClick={() =>
              setActiveImage({
                id: i,
                file: image,
              })
            }
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
    </>
  );
};

export default GalleryGrid;
