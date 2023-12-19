import type { MetadataRoute } from "next";
import type { Record } from "components/Music/types";

import { allMembers } from "@/.contentlayer/generated";
import music from "@/content/music/music.json";
import { generateBlogTitles, getMemberSlugs } from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://shockinglemon.com";

type DynamicPath = {
  url: __next_route_internal_types__.DynamicRoutes;
};

type SitemapEntry = Omit<MetadataRoute.Sitemap[number], "url"> & DynamicPath;

const staticPaths: Array<__next_route_internal_types__.StaticRoutes> = [
  "/about",
  "/band",
  "/blog",
  "/media",
  "/music",
];

// Static secondary pages
const pagesConfig: MetadataRoute.Sitemap = staticPaths.map((path) => ({
  url: `${baseUrl}${path}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
}));

// Dynamic subpages
const musicConfig = music.records
  .map<SitemapEntry>((album: Record) => ({
    url: `/music/${album.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))
  .map((entry) => ({ ...entry, url: `${baseUrl}${entry.url}` }));

const bandConfig: MetadataRoute.Sitemap = getMemberSlugs(allMembers)
  .map<SitemapEntry>((slug) => ({
    url: `/band/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))
  .map((entry) => ({ ...entry, url: `${baseUrl}${entry.url}` }));

const blogConfig: MetadataRoute.Sitemap = generateBlogTitles()
  .map<SitemapEntry>((blogEntry) => ({
    url: `/blog/${blogEntry.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.6,
  }))
  .map((entry) => ({ ...entry, url: `${baseUrl}${entry.url}` }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main page
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Static secondary pages
    ...pagesConfig,
    // Dynamic subpages for Music, Band, Blog
    ...musicConfig,
    ...bandConfig,
    ...blogConfig,
  ];
}
