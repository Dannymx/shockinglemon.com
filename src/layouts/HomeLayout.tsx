import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type HomeLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

const HomeLayout = ({ meta, children }: HomeLayoutProps) => (
  <>
    {meta}
    <div className="relative mx-auto flex h-full flex-col md:container md:pt-10 xl:max-w-7xl">
      {/* <span className={styles['background-text']}>ショッキング・レモン</span> */}
      <Header />
      <main className="grow py-10">{children}</main>
      <Footer />
    </div>
  </>
);

export default HomeLayout;
