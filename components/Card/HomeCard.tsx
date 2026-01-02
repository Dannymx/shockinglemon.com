import Image from "next/image";
import type { ReactNode } from "react";

interface HomeCardProps {
  children: ReactNode;
}

interface HomeCardImageProps {
  imgSrc: string;
  alt?: string;
}

interface HomeCardTitleProps {
  children: ReactNode;
}

interface HomeCardBodyProps {
  children: ReactNode;
}

interface HomeCardFooterProps {
  children: ReactNode;
}

export const HomeCard = ({ children }: HomeCardProps) => (
  <div
    className={`
      relative flex aspect-4/3 w-full flex-col
      sm:aspect-4/5
    `}
  >
    {children}
  </div>
);

export const HomeCardImage = ({ imgSrc, alt = "" }: HomeCardImageProps) => (
  <div className="absolute inset-0 sl-media-box">
    <Image
      fill
      alt={alt}
      className="object-cover"
      sizes="(min-width:1536px) 20vw, (min-width:1024px) 30vw, 50vw"
      src={imgSrc}
    />
  </div>
);

export const HomeCardTitle = ({ children }: HomeCardTitleProps) => (
  <h1 className="font-bebas text-2xl">{children}</h1>
);

export const HomeCardBody = ({ children }: HomeCardBodyProps) => (
  <div className="relative z-10 mt-auto flex w-full flex-col p-4 pt-0">
    {/* Fixed min-height ensures all glass boxes are the same size across cards */}
    <div
      className={`
        flex min-h-44 flex-col sl-glass-box px-5 py-4
        md:min-h-48
      `}
    >
      {children}
    </div>
  </div>
);

export const HomeCardFooter = ({ children }: HomeCardFooterProps) => (
  <div className="mt-auto pt-3">{children}</div>
);
