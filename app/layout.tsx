import type { ReactNode } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import { AppConfig } from "utils/AppConfig";
import { fontVariables } from "utils/fonts";
import "styles/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={AppConfig.locale} className={`${fontVariables}`}>
      <head />
      <body>
        <div className="relative mx-auto flex h-full flex-col md:container md:pt-10 xl:max-w-7xl">
          {/* <span className={styles['background-text']}>ショッキング・レモン</span> */}
          <Header />
          <main className="grow py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
