import {
  HomeCard,
  HomeCardBody,
  HomeCardImage,
  HomeCardTitle,
} from "components/Card/HomeCard";
import HomeHero from "components/Hero/Home";

const cards = [
  {
    title: "Card 1",
    img: "/assets/images/home/card1.jpg",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    ),
  },
  {
    title: "Card 2",
    img: "/assets/images/home/card2.jpg",
    content: <p>Short Card</p>,
  },
  {
    title: "Card 3",
    img: "/assets/images/home/card3.jpg",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    ),
  },
];

export default function Page() {
  return (
    <>
      <HomeHero />
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 justify-center gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <HomeCard key={card.img}>
            <HomeCardImage imgSrc={card.img} />
            <HomeCardBody>
              <HomeCardTitle>{card.title}</HomeCardTitle>
              {card.content}
            </HomeCardBody>
          </HomeCard>
        ))}
      </div>
    </>
  );
}
