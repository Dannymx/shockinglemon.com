import type { Member, Post } from "content-collections";
import type { JSX } from "react";

import type { Record } from "@/components/Music/types";
import { LyricsContent } from "@/components/OpenGraph/Lyrics";
import { MemberContent } from "@/components/OpenGraph/Member";
import { CardContent } from "@/components/OpenGraph/Page";
import { RecordContent } from "@/components/OpenGraph/Record";

export type Card = OGPage | OGRecord | OGMember | OGLyrics | OGPost;

export interface OGPage {
  slug: Slugs;
  content: JSX.Element;
}

export interface OGRecord {
  slug: "record";
  content: ({ record }: { record: Record }) => JSX.Element;
}

export interface OGMember {
  slug: "member";
  content: ({ member }: { member: Member }) => JSX.Element;
}

export interface OGLyrics {
  slug: "lyrics";
  content: ({
    record,
    songName,
  }: {
    record: Record | null;
    songName: string;
  }) => JSX.Element;
}

export interface OGPost {
  slug: "blog-post";
  content: ({ post }: { post: Post }) => JSX.Element;
}

type Slugs = "home" | "music" | "band" | "media" | "blog" | "about";

export const cards: Card[] = [
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
  {
    slug: "member",
    content: ({ member }: { member: Member }) => (
      <MemberContent member={member} />
    ),
  },
  {
    slug: "lyrics",
    content: ({
      record,
      songName,
    }: {
      record: Record | null;
      songName: string;
    }) => <LyricsContent record={record} songName={songName} />,
  },
  {
    slug: "blog-post",
    content: ({ post }: { post: Post }) => {
      if (post?.image) {
        return (
          <CardContent img={post.image}>
            <div tw="flex text-7xl text-slate-300">{post.title}</div>
          </CardContent>
        );
      }
      return (
        <CardContent img="https://shockinglemon.imgix.net/assets/images/music/inner-light/booklet-back.jpg?w=1200&h=630&fit=crop&crop=edges">
          <div tw="flex text-9xl text-slate-300">Blog</div>
        </CardContent>
      );
    },
  },
];
