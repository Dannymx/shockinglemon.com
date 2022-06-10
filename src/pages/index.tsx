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
          title="Shocking Lemon"
          description="Fan dedicated website for the Japanese rock band Shocking Lemon"
        />
      }
    >
      <div className={styles.main}>
        <h1 className={`${styles.heading} bauhaus`}>Shocking Lemon</h1>
        <Image src={MainImage} alt="Picture of band Shocking Lemon" />

        <a
          className={styles.discord}
          href="https://discord.gg/wcHhXbJR7P"
          target={'_blank'}
          rel="noreferrer"
        >
          <h3 className={styles.discord}></h3>
          Join us on Discord
        </a>
      </div>
    </Main>
  );
};

export default Index;
