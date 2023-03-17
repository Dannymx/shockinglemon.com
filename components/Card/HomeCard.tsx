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
  <div className="relative flex aspect-[4/3] w-full items-end sm:aspect-[4/5]">
    {children}
  </div>
);

export const HomeCardImage = ({ imgSrc, alt = "" }: HomeCardImageProps) => (
  <div className="absolute h-full w-full overflow-hidden rounded-xl shadow-md shadow-slate-500">
    <Image
      className="object-cover"
      src={`${imgSrc}`}
      alt={alt}
      fill
      sizes="(min-width:1536px) 20vw, (min-width:1024px) 30vw, 50vw"
    />
  </div>
);

export const HomeCardTitle = ({ children }: HomeCardTitleProps) => (
  <h1 className="font-bebas text-2xl">{children}</h1>
);

export const HomeCardBody = ({ children }: HomeCardBodyProps) => (
  <div className="flex w-full flex-col p-4 pt-0 md:min-h-[50%]">
    <div className="grow rounded-md bg-white/75 py-4 px-5 backdrop-blur-sm">
      {children}
    </div>
  </div>
);
