import Image from 'next/image';

import HomeLayout from '@/layouts/HomeLayout';

const Home = () => (
  <HomeLayout>
    <>
      <div className="flex h-full">
        <div className="">
          <span className="font-bebas text-4xl font-extrabold">Welcome!</span>
        </div>
        <div className="relative grid aspect-member-grid h-[500px] grid-cols-2 gap-1">
          <div className="relative ">
            <Image
              className="rounded-tl-3xl rounded-br-3xl"
              src={'/assets/images/1.jpg'}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-tr-3xl rounded-bl-3xl"
              src={'/assets/images/2.jpg'}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-tr-3xl rounded-bl-3xl"
              src={'/assets/images/3.jpg'}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-tl-3xl rounded-br-3xl"
              src={'/assets/images/4.jpg'}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  </HomeLayout>
);

export default Home;
