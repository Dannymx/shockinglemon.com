import type { Member } from "content-collections";

import imgixLoader from "@/lib/imageLoader";
import { getMemberName } from "@/lib/utils";

interface Props {
  member: Member;
}

export const MemberContent = ({ member }: Props) => (
  <div tw="relative h-full w-full flex flex-row overflow-hidden">
    <img
      alt=""
      tw="absolute left-0 top-0 right-0 bottom-0"
      src={imgixLoader({
        src: member.image,
        width: 1200,
      })}
      style={{
        filter: "blur(16px) brightness(50%)",
        objectFit: "none",
        objectPosition: "center",
      }}
    />
    {/* Left Column */}
    <div tw="flex flex-row h-full w-2/5 items-center justify-end">
      <div tw="relative flex bg-white/25 p-4 rounded-xl">
        <div
          tw="flex rounded-lg items-center justify-center"
          style={{
            width: "250px",
            height: "500px",
            overflow: "hidden",
          }}
        >
          <img
            alt=""
            tw="absolute h-full w-full"
            src={imgixLoader({
              src: member.image,
              width: 500,
            })}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
    {/* Right Column */}
    <div tw="flex flex-col h-full w-3/5 items-center justify-center text-slate-200">
      <p tw="text-7xl">{getMemberName(member).at(0)}</p>
      <p tw="text-4xl">{getMemberName(member).at(1)}</p>
    </div>
  </div>
);
