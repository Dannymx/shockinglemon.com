import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import "styles/global.css";

import { AppConfig } from "@/lib/AppConfig";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: AppConfig.title,
    template: `%s - ${AppConfig.title}`,
  },
  description: AppConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={AppConfig.locale} className={`${fontVariables}`}>
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-255T0ZF51F"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-255T0ZF51F');
        `}
      </Script>

      <body className="bg-light-bg font-inter text-dark-copy antialiased">
        <div className="relative flex h-full flex-col sm:pt-10">
          <Navigation />
          <main className="container mx-auto max-w-7xl grow px-8 py-10 2xl:px-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
