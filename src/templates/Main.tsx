import type { ReactNode } from 'react';

import styles from '@/styles/index.module.css';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className={`${styles.main} antialiased`}>
    {meta}
    <h1 className={`${styles.heading} bauhaus`}>Shocking Lemon</h1>
    <div className="text-xl">{children}</div>
  </div>
);

export { Main };
