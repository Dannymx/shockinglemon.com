import Image from 'next/image';

import { Meta } from '@/layouts/Meta';
import MainImage from '@/public/assets/images/main.jpg';
import styles from '@/styles/index.module.css';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="ShockingLemon.com"
          description="Fan dedicated website for the Japanese rock band Shocking Lemon"
        />
      }
    >
      <div className={styles.main}>
        <h1 className={`${styles.heading} bauhaus`}>Shocking Lemon</h1>
        <Image src={MainImage} alt="Picture of band Shocking Lemon" />
        <h3 className={styles.discord}>
          Join us on{' '}
          <a
            href="https://discord.gg/hvrAYhY9"
            target={'_blank'}
            rel="noreferrer"
          >
            Discord
          </a>
        </h3>
      </div>
    </Main>
  );
};

export default Index;
