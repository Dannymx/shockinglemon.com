import {
  HomeCard,
  HomeCardBody,
  HomeCardImage,
  HomeCardTitle,
} from "components/Card/HomeCard";
import HomeHero from "components/Hero/Home";
import { cards } from "./home";

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
