import music from "content/music/music.json";
import { allMembers } from "content-collections";
import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";
import type { JSX } from "react";

import type { Record, Song } from "@/components/Music/types";
import { slugify } from "@/lib/utils";

import type { Card } from "./cards";
import { cards } from "./cards";

export const runtime = "edge";

const getContent = ({ og, url }: { og: Card; url: URL }) => {
  const slug = url.searchParams.get("record");
  const member = url.searchParams.get("member");
  const song = url.searchParams.get("song");

  const singleRecord = music.records.find((item: Record) => item.slug === slug);
  const singleMember = allMembers.find((entry) => entry.slug === member);

  if (slug && singleRecord && og.slug === "record") {
    return og.content({
      record: singleRecord,
    });
  }

  if (member && singleMember && og.slug === "member") {
    return og.content({
      member: singleMember,
    });
  }

  if (song && og.slug === "lyrics") {
    // Find the song name from any album that contains it
    const foundSong = music.records
      .flatMap((record: Record) => record.songs)
      .find((s: Song) => slugify(s.name) === song);

    return og.content({
      record: singleRecord ?? null,
      songName: foundSong?.name ?? song,
    });
  }

  return og.content as JSX.Element;
};

export async function GET(req: Request) {
  const fonts = [
    {
      name: "bauhaus",
      style: "normal" as const,
      data: await fetch(
        new URL("@/fonts/BauhausLightRegular.ttf", import.meta.url),
      ).then((res) => res.arrayBuffer()),
    },
  ];

  const url = new URL(req.url);

  const card = url.searchParams.get("card");

  const og = cards.find((entry) => entry.slug === card);

  if (!og) return new NextResponse("OG not found", { status: 404 });

  const content = getContent({ og, url });

  return new ImageResponse(content, {
    width: 1200,
    height: 630,
    fonts,
  });
}
