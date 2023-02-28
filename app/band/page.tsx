import Toshiki from "data/band/toshiki-shimizu.mdx";
import Member from "components/Band/Member";

const band = [
  {
    name: { en: "Toshiki Shimizu", jp: "シミズトシキ" },
    img: "/assets/images/band/toshiki-shimizu.jpg",
    content: <Toshiki />,
  },
  {
    name: { en: "Hideki Taniuchi", jp: "タニウチヒデキ" },
    img: "/assets/images/band/hideki-taniuchi.jpg",
    content: <Toshiki />,
  },
  {
    name: { en: "Takahiko Ogino", jp: "オギノタカヒコ" },
    img: "/assets/images/band/takahiko-ogino.jpg",
    content: <Toshiki />,
  },
  {
    name: { en: "Makoto Sakata", jp: "サカタマコト" },
    img: "/assets/images/band/makoto-sakata.jpg",
    content: <Toshiki />,
  },
];

const Band = () => (
  <>
    {band.map((member, i) => (
      <Member key={member.img} member={member} reversed={i % 2 !== 0} />
    ))}
  </>
);

export default Band;
