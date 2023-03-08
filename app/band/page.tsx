import HidekiEN from "content/band/hideki-taniuchi.en.mdx";
import HidekiJP from "content/band/hideki-taniuchi.jp.mdx";
import MakotoEN from "content/band/makoto-sakata.en.mdx";
import MakotoJP from "content/band/makoto-sakata.jp.mdx";
import TakahikoEN from "content/band/takahiko-ogino.en.mdx";
import TakahikoJP from "content/band/takahiko-ogino.jp.mdx";
import ToshikiEN from "content/band/toshiki-shimizu.en.mdx";
import ToshikiJP from "content/band/toshiki-shimizu.jp.mdx";
import type { Metadata } from "next";
import Member from "components/Band/Member";

export const metadata: Metadata = {
  title: "Band",
};

const band = [
  {
    name: { en: "Toshiki Shimizu", jp: "シミズトシキ" },
    img: "/assets/images/band/toshiki-shimizu.jpg",
    content: {
      en: <ToshikiEN />,
      jp: <ToshikiJP />,
    },
  },
  {
    name: { en: "Hideki Taniuchi", jp: "タニウチヒデキ" },
    img: "/assets/images/band/hideki-taniuchi.jpg",
    content: {
      en: <HidekiEN />,
      jp: <HidekiJP />,
    },
  },
  {
    name: { en: "Takahiko Ogino", jp: "オギノタカヒコ" },
    img: "/assets/images/band/takahiko-ogino.jpg",
    content: {
      en: <TakahikoEN />,
      jp: <TakahikoJP />,
    },
  },
  {
    name: { en: "Makoto Sakata", jp: "サカタマコト" },
    img: "/assets/images/band/makoto-sakata.jpg",
    content: {
      en: <MakotoEN />,
      jp: <MakotoJP />,
    },
  },
];

const Band = () => (
  <div className="flex flex-col gap-4">
    {band.map((member, i) => (
      <Member key={member.img} member={member} reversed={i % 2 !== 0} />
    ))}
  </div>
);

export default Band;
