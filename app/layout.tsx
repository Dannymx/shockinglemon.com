import "styles/global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppConfig } from "@/lib/AppConfig";
import { fontVariables } from "@/lib/fonts";
import { OpenGraphConfig } from "@/lib/OpenGraph";

export const metadata: Metadata = {
  title: {
    default: AppConfig.title.en,
    template: `%s`,
  },
  description: AppConfig.description,
  keywords: [
    AppConfig.title.en,
    AppConfig.title.jp,
    "Japan",
    "Japanese",
    "J-Rock",
    "Visual kei",
  ],
  ...(OpenGraphConfig.home ?? null),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={fontVariables} lang={AppConfig.locale}>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta key="charset" charSet="UTF-8" />
      <link key="apple" href="/apple-touch-icon.png" rel="apple-touch-icon" />
      <link
        key="icon32"
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        key="icon16"
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link key="favicon" href="/favicon.ico" rel="icon" />
      <body className="bg-light-bg font-inter text-dark-copy antialiased">
        <div
          className={`
            relative flex h-full flex-col
            sm:pt-10
          `}
        >
          <Analytics />
          <Navigation />
          <main
            className={`
              container mx-auto max-w-7xl grow px-8 py-10
              2xl:px-0
            `}
          >
            {children}
          </main>
          <Footer />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
