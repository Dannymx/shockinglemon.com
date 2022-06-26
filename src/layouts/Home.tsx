import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type HomeProps = {
  children: ReactNode;
};

const Home = ({ children }: HomeProps) => (
  <>
    <Header></Header>
    <main>{children}</main>
    <Footer></Footer>
  </>
);

export default Home;
