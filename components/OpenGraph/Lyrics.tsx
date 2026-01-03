import type { Record } from "@/components/Music/types";
import imgixLoader from "@/lib/imageLoader";

interface Props {
  record: Record | null;
  songName: string;
}

export const LyricsContent = ({ record, songName }: Props) => (
  <div tw="relative h-full w-full flex flex-row overflow-hidden">
    {record?.images.cover ? (
      <img
        alt=""
        tw="absolute left-0 top-0 right-0 bottom-0"
        src={imgixLoader({
          src: `/assets/images/music/${record.slug}/cover.jpg`,
          width: 1200,
        })}
        style={{
          filter: "blur(16px) brightness(50%)",
          objectFit: "none",
          objectPosition: "center",
        }}
      />
    ) : (
      <div
        tw="absolute left-0 top-0 right-0 bottom-0"
        style={{
          width: "1200px",
          height: "100%",
          backgroundImage: `radial-gradient( circle farthest-corner at 10% 20%, rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )`,
        }}
      />
    )}
    {/* Left Column */}
    <div tw="flex flex-row h-full w-2/5 items-center justify-end">
      <div tw="relative flex bg-white/25 p-4 rounded-xl">
        <div
          tw="flex rounded-lg items-center justify-center"
          style={{
            width: "380px",
            height: "380px",
            overflow: "hidden",
          }}
        >
          {record?.images.cover ? (
            <img
              alt=""
              tw="absolute h-full w-full"
              src={imgixLoader({
                src: `/assets/images/music/${record.slug}/cover.jpg`,
                width: 500,
              })}
              style={{
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              tw="flex w-full items-center justify-center text-9xl"
              style={{
                height: "380px",
              }}
            >
              <span>🍋</span>
            </div>
          )}
        </div>
      </div>
    </div>
    {/* Right Column */}
    <div tw="flex flex-col h-full w-3/5 items-center justify-center text-slate-200">
      <p tw="text-5xl text-slate-400 mb-2">Lyrics</p>
      <p tw="text-6xl">{songName}</p>
      {record ? <p tw="text-3xl text-slate-400">{record.name.en}</p> : null}
    </div>
  </div>
);
