import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row xl:justify-center">
      {/* Left column intro text */}
      <div className="flex w-full flex-col items-center justify-center rounded-md bg-white/75 p-6 pb-10 shadow-xl backdrop-blur-sm sm:z-10 sm:-mb-6 sm:w-11/12 sm:p-8 md:mb-0 md:-mr-28 md:w-[300px] md:p-6 lg:w-[500px] lg:p-10">
        <div className="mb-2 block w-full text-2xl font-bold">
          <span className="font-bebas">Welcome /</span>
          <span className="font-noto">ようこそ</span>
        </div>
        <p className="text-sm lg:text-base">
          This website is dedicated to the Japanese rock band Shocking Lemon.
          After many years since the band disolved, many fans wanted to know
          more about their music, so as fans we decided to create this website
          and archive their music, photos, lyrics and other rare media so others
          can enjoy it and make sure Shocking Lemon is not forgotten.
        </p>
      </div>
      {/* Right column image */}
      <div className="relative z-10 -mt-4 flex h-[200px] w-[95vw] grow overflow-hidden rounded-xl shadow-2xl sm:z-0 sm:mt-0 sm:h-[300px] sm:w-full md:h-[350px] md:w-auto lg:h-[420px]">
        <Image
          src="/assets/images/home/intro-band.jpg"
          className="object-cover"
          fill
          alt=""
          sizes="(min-width:1280px) 30vw, 50vw"
        />
      </div>
    </div>
  );
}
