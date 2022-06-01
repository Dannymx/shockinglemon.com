import type { ReactNode } from 'react';

import styles from '@/styles/index.module.css';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className={`${styles.main} antialiased`}>
    {meta}
    <div className="py-5 text-xl">{children}</div>
  </div>
);

export { Main };
