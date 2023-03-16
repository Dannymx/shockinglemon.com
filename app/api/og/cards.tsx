import type { ReactNode } from "react";

import type { Record } from "@/components/Music/types";
import imgixLoader from "@/lib/imageLoader";

type Props = {
  img: string;
  children: ReactNode;
};

const CardContent = ({ img, children }: Props) => (
  <div tw="flex h-full w-full pb-10 items-end flex-row">
    <img tw="absolute top-0 left-0" src={img} alt="" />
    <div tw="flex flex-col py-6 px-10 bg-black/50 w-full">{children}</div>
  </div>
);

type RecordContentProps = {
  record: Record;
};

const RecordContent = ({ record }: RecordContentProps) => (
  <div tw="flex h-full w-full pb-10 items-end flex-row">
    <img
      tw="absolute top-0 left-0"
      src={imgixLoader({
        src: `/assets/images/music/${record.slug}/cover.jpg`,
        width: 1000,
      })}
      alt=""
    />
    {/* <div tw="flex flex-col py-6 px-10 bg-black/50 w-full">{children}</div> */}
  </div>
);

type CardsProps = (
  | {
      slug: string;
      content: JSX.Element;
    }
  | {
      slug: "record";
      content: ({ record }: { record: Record }) => JSX.Element;
    }
)[];

export const cards: CardsProps = [
  {
    slug: "home",
    content: (
      <CardContent img="https://shockinglemon.imgix.net/assets/images/music/sometimes-alone/booklet-back.jpg?fit=crop&w=1200&h=630">
        <div tw="text-9xl text-slate-300">Shocking Lemon</div>
        <div tw="text-4xl text-slate-300">ショッキング・レモン</div>
      </CardContent>
    ),
  },
  {
    slug: "music",
    content: (
      <CardContent img="https://shockinglemon.imgix.net/assets/images/music/denimhead/booklet-1.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fp-x=.75&fp-y=.26&fp-z=2.27">
        <div tw="flex text-9xl text-slate-300">Music</div>
      </CardContent>
    ),
  },
  {
    slug: "band",
    content: (
      <CardContent img="https://shockinglemon.imgix.net/assets/images/music/sound-of-ash/inner-back.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fp-x=.5&fp-y=0&fp-z=1.09">
        <div tw="flex text-9xl text-slate-300">Band</div>
      </CardContent>
    ),
  },
  {
    slug: "blog",
    content: (
      <CardContent img="https://shockinglemon.imgix.net/assets/images/music/inner-light/booklet-back.jpg?w=1200&h=630&fit=crop&crop=edges">
        <div tw="flex text-9xl text-slate-300">Blog</div>
      </CardContent>
    ),
  },
  {
    slug: "about",
    content: (
      <CardContent img="https://shockinglemon.imgix.net/assets/images/music/inner-light/inner-back.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fp-x=.5&fp-y=.7&fp-z=1.09">
        <div tw="flex text-9xl text-slate-300">About</div>
      </CardContent>
    ),
  },
  {
    slug: "record",
    content: ({ record }: { record: Record }) => (
      <RecordContent record={record} />
    ),
  },
];
