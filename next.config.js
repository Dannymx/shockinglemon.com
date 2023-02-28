/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = require("@next/mdx")();

module.exports = withMDX(
  withBundleAnalyzer({
    eslint: {
      dirs: ["."],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
      mdxRs: true,
    },
    images: {
      loader: "custom",
      loaderFile: "./lib/imageLoader.ts",
      deviceSizes: [640, 768, 1024, 1280, 1536],
    },
  })
);
