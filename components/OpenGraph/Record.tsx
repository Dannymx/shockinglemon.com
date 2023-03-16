import type { Record } from "@/components/Music/types";
import imgixLoader from "@/lib/imageLoader";

type Props = {
  record: Record;
};

export const RecordContent = ({ record }: Props) => (
  <div tw="relative h-full w-full flex flex-row overflow-hidden">
    {record.images.cover ? (
      <img
        style={{
          filter: "blur(16px) brightness(50%)",
          objectFit: "none",
          objectPosition: "center",
        }}
        tw="absolute left-0 top-0 right-0 bottom-0"
        src={imgixLoader({
          src: `/assets/images/music/${record.slug}/cover.jpg`,
          width: 1200,
        })}
        alt=""
      />
    ) : (
      <div
        style={{
          width: "1200px",
          height: "100%",
          backgroundImage:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )",
        }}
        tw="absolute left-0 top-0 right-0 bottom-0"
      />
    )}
    {/* Left Column */}
    <div tw="flex flex-row h-full w-2/5 items-center justify-end">
      <div tw="flex bg-white/25 p-4 rounded-xl">
        <div
          style={{
            width: "380px",
            aspectRatio: "1/1",
            overflow: "hidden",
          }}
          tw="flex rounded-lg items-center justify-center"
        >
          {record.images.cover ? (
            <img
              style={{
                objectFit: "cover",
              }}
              tw="w-full"
              src={imgixLoader({
                src: `/assets/images/music/${record.slug}/cover.jpg`,
                width: 500,
              })}
              alt=""
            />
          ) : (
            <div
              style={{
                height: "380px",
              }}
              tw="flex w-full items-center justify-center text-9xl"
            >
              <span>🍋</span>
            </div>
          )}
        </div>
      </div>
    </div>
    {/* Right Column */}
    <div tw="flex flex-col h-full w-3/5 items-center justify-center text-slate-200">
      <p tw="text-7xl">{record.name.en}</p>
      <p tw="text-4xl">{record.name.jp}</p>
    </div>
  </div>
);
