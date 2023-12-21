import type { Metadata } from "next";
import { AppConfig } from "./AppConfig";
import { absoluteUrl } from "./utils";

type OpenGraphProps = Metadata & {
  name?: string;
  slug?:
    | __next_route_internal_types__.StaticRoutes
    | __next_route_internal_types__.DynamicRoutes;
  imgPath: string;
};

const generateOpenGraph = ({
  openGraph,
  name,
  slug,
  imgPath,
}: OpenGraphProps): Metadata => ({
  metadataBase: new URL(absoluteUrl()),
  openGraph: {
    locale: "en_US",
    url: slug ?? undefined,
    title: name ? `${name} | ${AppConfig.title.en}` : AppConfig.title.en,
    description: AppConfig.description,
    siteName: AppConfig.title.en,
    images: [
      {
        url: imgPath,
        width: 1200,
        height: 630,
        alt: name ? `${name} | ${AppConfig.title.en}` : AppConfig.title.en,
      },
    ],

    ...openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: name ? `${name} | ${AppConfig.title.en}` : AppConfig.title.en,
    description: openGraph?.description ?? AppConfig.description,
    images: [imgPath],
  },
});

export const OpenGraphConfig: Record<
  string,
  | Metadata
  | (({ name, slug }: { name: string; slug: string } & Metadata) => Metadata)
> = {
  home: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    name: "Home",
    imgPath: "/api/og?card=home",
  }),
  music: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    imgPath: "/api/og?card=music",
    name: "Music",
    slug: "/music",
  }),
  band: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    imgPath: "/api/og?card=band",
    name: "Band",
    slug: "/band",
  }),
  media: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    imgPath: "/api/og?card=media",
    name: "Media",
    slug: "/media",
  }),
  blog: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    imgPath: "/api/og?card=blog",
    name: "Blog",
    slug: "/blog",
  }),
  about: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    imgPath: "/api/og?card=about",
    name: "About",
    slug: "/about",
  }),
  record: ({ name, slug, openGraph }) =>
    generateOpenGraph({
      openGraph: {
        type: "music.album",
        ...openGraph,
      },
      imgPath: `/api/og?card=record&record=${slug}`,
      name,
      slug: `/music/${slug}`,
    }),
  member: ({ name, slug, openGraph }) =>
    generateOpenGraph({
      openGraph: {
        type: "profile",
        ...openGraph,
      },
      imgPath: `/api/og?card=member&member=${slug}`,
      name,
      slug: `/band/${slug}`,
    }),
  post: ({ name, slug, openGraph }) =>
    generateOpenGraph({
      openGraph: {
        type: "article",
        ...openGraph,
      },
      imgPath: `/api/og?card=blog`,
      name,
      slug: `/blog/${slug}`,
    }),
};
