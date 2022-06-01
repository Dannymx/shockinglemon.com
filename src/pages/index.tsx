import Image from 'next/image';

import { Meta } from '@/layouts/Meta';
import MainImage from '@/public/assets/images/main.jpg';
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
      <Image src={MainImage} alt="Picture of band Shocking Lemon" />
    </Main>
  );
};

export default Index;
