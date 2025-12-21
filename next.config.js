const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withMdx = require("@next/mdx")();

const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

module.exports = withBundleAnalyzer(withContentlayer(withMdx(nextConfig)));
