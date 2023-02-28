import Image from "next/image";

export default function Band() {
  return (
    <div className="">
      <div className="flex items-start">
        <div className="relative flex aspect-[1/2] w-1/4 overflow-hidden rounded-xl shadow-md shadow-slate-500">
          <Image
            className="object-cover"
            alt="Toshiki Shimizu"
            src="/assets/images/band/toshiki-shimizu.jpg"
            fill
          />
        </div>
        <div className="z-10 -ml-8 mt-8 flex grow rounded-md bg-white/75 p-6 shadow-md shadow-slate-500/25">
          <h2 className="text-4xl">
            <span className="font-bebas">Toshiki Shimizu</span>
            <span> / </span>
            <span className="font-noto">シミズトシキ</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
