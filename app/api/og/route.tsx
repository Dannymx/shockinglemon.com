import { ImageResponse } from "@vercel/og";
import music from "content/music/music.json";
import { NextResponse } from "next/server";
import type { Record } from "components/Music/types";
import type { Card } from "./cards";
import { cards } from "./cards";
import type { Member } from ".contentlayer/generated";
import { allMembers } from ".contentlayer/generated";

export const config = {
  runtime: "experimental-edge",
};

const getContent = ({ og, url }: { og: Card; url: URL }) => {
  const slug = url.searchParams.get("record");
  const member = url.searchParams.get("member");

  switch (og.slug) {
    case "record":
      return og.content({
        record: music.records.find((item) => item.slug === slug) as Record,
      });

    case "member":
      return og.content({
        member: allMembers.find((entry) => entry.slug === member) as Member,
      });

    default:
      return og.content;
  }
};

export async function GET(req: Request) {
  const fonts = [
    {
      name: "bauhaus",
      style: "normal" as const,
      data: await fetch(
        new URL("@/fonts/BauhausLightRegular.ttf", import.meta.url)
      ).then((res) => res.arrayBuffer()),
    },
  ];

  const url = new URL(req.url);

  const card = url.searchParams.get("card");

  const og = cards.find((entry) => entry.slug === card);

  if (!og) return new NextResponse("OG not found", { status: 404 });

  return new ImageResponse(getContent({ og, url }), {
    width: 1200,
    height: 630,
    fonts,
  });
}
