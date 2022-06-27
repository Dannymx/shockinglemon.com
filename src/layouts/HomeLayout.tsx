import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import styles from './HomeLayout.module.css';

type HomeProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeProps) => (
  <>
    <div className="relative mx-auto h-full md:container md:pt-10 xl:max-w-7xl">
      <span className={styles['background-text']}>ショッキング・レモン</span>
      <Header></Header>
      <main className="py-5">{children}</main>
      <Footer></Footer>
    </div>
  </>
);

export default HomeLayout;
