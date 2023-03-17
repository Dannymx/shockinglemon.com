import { Bebas_Neue, Inter_Tight, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter_Tight({
  variable: "--font-inter",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const noto = Noto_Sans_JP({
  variable: "--font-noto",
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: false,
});
const bauhaus = localFont({
  src: "../fonts/BauhausLightRegular.ttf",
  variable: "--font-bauhaus",
  weight: "300",
});

export const fontVariables = [
  bebas.variable,
  inter.variable,
  noto.variable,
  bauhaus.variable,
].join(" ");
