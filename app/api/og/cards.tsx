import type { Record } from "@/components/Music/types";
import { CardContent } from "@/components/OpenGraph/Page";
import { RecordContent } from "@/components/OpenGraph/Record";

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
    slug: "media",
    content: (
      <CardContent img="https://shockinglemon.imgix.net/assets/images/music/sometimes-alone/booklet-5.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fp-x=.75&fp-y=.5&fp-z=1.89">
        <div tw="flex text-9xl text-slate-300">Media</div>
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
