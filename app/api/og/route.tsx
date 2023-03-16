import { ImageResponse } from "@vercel/og";
import music from "content/music/music.json";
import { NextResponse } from "next/server";
import type { Record } from "components/Music/types";
import { cards } from "./cards";

export const config = {
  runtime: "experimental-edge",
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
  const slug = url.searchParams.get("record");

  const og = cards.find((entry) => entry.slug === card);

  if (!og) return new NextResponse("OG not found", { status: 404 });

  const ogContent =
    typeof og.content === "function"
      ? og.content({
          record: music.records.find((item) => item.slug === slug) as Record,
        })
      : og.content;

  return new ImageResponse(ogContent, {
    width: 1200,
    height: 630,
    fonts,
  });
}
