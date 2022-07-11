import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type HomeProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeProps) => (
  <>
    <div className="relative mx-auto flex h-full flex-col md:container md:pt-10 xl:max-w-7xl">
      {/* <span className={styles['background-text']}>ショッキング・レモン</span> */}
      <Header />
      <main className="grow py-5">{children}</main>
      <Footer />
    </div>
  </>
);

export default HomeLayout;
