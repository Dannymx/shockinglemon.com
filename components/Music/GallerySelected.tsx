import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import imgixLoader from "lib/imageLoader";

import type { Record } from "./types";

interface Props {
  album: Record;
  activeImage: string;
}

const GallerySelected = ({ album, activeImage }: Props) => {
  const imgSrc = imgixLoader({
    src: `/assets/images/music/${album.slug}/${activeImage}`,
    width: "1.0",
    auto: false,
  });

  return (
    <div className="flex justify-between text-xs">
      <span>{activeImage}</span>
      <a
        className="flex justify-end"
        href={imgSrc}
        rel="noreferrer"
        target="_blank"
      >
        View full size <ArrowTopRightOnSquareIcon className="ml-2 inline h-4" />
      </a>
    </div>
  );
};

export default GallerySelected;
