import Image from "next/image";

import HomeLayout from "@/layouts/HomeLayout";

const Home = () => (
  <HomeLayout>
    <>
      <div className="flex items-center justify-center">
        <div className="z-10 -mr-40 flex w-1/3 flex-col items-center justify-center rounded-3xl bg-white/75 p-10 shadow-xl backdrop-blur-sm">
          <div className="mb-2 block w-full text-2xl font-bold">
            <span className="font-bebas">Welcome /</span>
            <span className="font-noto">ようこそ</span>
          </div>
          <p className="text-sm">
            This website is dedicated to the Japanese rock band Shocking Lemon.
            After many years since the band disolved, many fans wanted to know
            more about their music, so as fans of the band we decided to create
            this website and archive their music, photos, lyrics and other rare
            media so others fans can enjoy it and make sure Shocking Lemon is
            not forgotten.
          </p>
        </div>
        <div className="relative h-[420px] w-[700px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/assets/images/intro-band.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <div />
    </>
  </HomeLayout>
);

export default Home;
