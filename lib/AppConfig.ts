import type { Metadata } from "next";
import { absoluteUrl } from "./utils";

export const AppConfig = {
  site_name: "shockinglemon.com",
  title: { en: "Shocking Lemon", jp: "ショッキング・レモン" },
  description:
    "Fan dedicated website for the Japanese rock band Shocking Lemon",
  locale: "en",
  discord: "https://discord.gg/wcHhXbJR7P",
};

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
  openGraph: {
    locale: "en_US",
    url: absoluteUrl(slug ?? undefined),
    title: name ? `${name} | ${AppConfig.title.en}` : AppConfig.title.en,
    description: AppConfig.description,
    siteName: slug ? `${AppConfig.site_name}${slug}` : AppConfig.site_name,
    images: [
      {
        url: absoluteUrl(imgPath),
        width: 1200,
        height: 630,
        alt: name ? `${name} | ${AppConfig.title.en}` : AppConfig.title.en,
      },
    ],

    ...openGraph,
  },
});

type OpenGraphConfigProps = Record<
  string,
  Metadata | (({ name, slug }: { name: string; slug: string }) => Metadata)
>;

export const OpenGraphConfig: OpenGraphConfigProps = {
  home: generateOpenGraph({
    openGraph: {
      type: "website",
    },
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
  about: generateOpenGraph({
    openGraph: {
      type: "website",
    },
    imgPath: "/api/og?card=about",
    name: "About",
    slug: "/about",
  }),
  record: ({ name, slug }) =>
    generateOpenGraph({
      openGraph: {
        type: "music.album",
      },
      imgPath: `/api/og?card=record&record=${slug}`,
      name,
      slug: `/music/${slug}`,
    }),
  member: ({ name, slug }) =>
    generateOpenGraph({
      openGraph: {
        type: "profile",
      },
      imgPath: `/api/og?card=member&member=${slug}`,
      name,
      slug: `/band/${slug}`,
    }),
};
