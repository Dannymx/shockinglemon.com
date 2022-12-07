import type { ReactNode } from "react";
import Image from "next/image";

type HomeCardProps = {
  children: ReactNode;
};

type HomeCardImageProps = {
  imgSrc: string;
  alt?: string;
};

type HomeCardTitleProps = {
  children: ReactNode;
};

type HomeCardBodyProps = {
  children: ReactNode;
};

export const HomeCard = ({ children }: HomeCardProps) => (
  <div className="relative flex">{children}</div>
);

export const HomeCardImage = ({ imgSrc, alt = "" }: HomeCardImageProps) => (
  <div className="relative aspect-[4/5] h-[400px] overflow-hidden rounded-xl shadow-xl">
    <Image
      className="object-cover transition duration-500 ease-in-out hover:scale-105"
      src={`${imgSrc}?fit=clip&h=500`}
      alt={alt}
      fill
    />
  </div>
);

export const HomeCardTitle = ({ children }: HomeCardTitleProps) => (
  <h1 className="font-bebas text-2xl">{children}</h1>
);

export const HomeCardBody = ({ children }: HomeCardBodyProps) => (
  <div className="absolute bottom-0 h-1/2 w-full p-4">
    <div className="h-full rounded-md bg-white/75 py-4 px-5 text-sm backdrop-blur-sm">
      {children}
    </div>
  </div>
);
