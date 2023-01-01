import type { ReactNode } from "react";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import { AppConfig } from "utils/AppConfig";
import { fontVariables } from "utils/fonts";
import "styles/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={AppConfig.locale} className={`${fontVariables}`}>
      <head />
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
