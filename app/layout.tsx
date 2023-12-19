import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import "styles/global.css";

import { AppConfig } from "@/lib/AppConfig";
import { fontVariables } from "@/lib/fonts";
import { OpenGraphConfig } from "@/lib/OpenGraph";

export const metadata: Metadata = {
  title: {
    default: AppConfig.title.en,
    template: `%s | ${AppConfig.title.en}`,
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
    <html lang={AppConfig.locale} className={fontVariables}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" key="charset" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="icon16"
      />
      <link rel="icon" href="/favicon.ico" key="favicon" />
      <body className="bg-light-bg font-inter text-dark-copy antialiased">
        <div className="relative flex h-full flex-col sm:pt-10">
          <Analytics />
          <Navigation />
          <main className="container mx-auto max-w-7xl grow px-8 py-10 2xl:px-0">
            {children}
          </main>
          <Footer />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
