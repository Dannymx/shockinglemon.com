import Link from "next/link";
import {
  HomeCard,
  HomeCardBody,
  HomeCardImage,
  HomeCardTitle,
} from "components/Card/HomeCard";
import HomeHero from "components/Hero/Home";

import { AppConfig } from "@/lib/AppConfig";

const cards = [
  {
    title: "Join us on Discord!",
    img: "/assets/images/home/discord-bg.jpg?w=300&h=600&fit=crop&crop=focalpoint&fp-x=.5&fp-y=1&fp-z=1",
    content: (
      <>
        <p>
          Join our community of fans and chat with other fans about anything
          related to Shocking Lemon and more!
        </p>
        <p className="mt-2">
          <a
            href={AppConfig.discord}
            className="font-bold hover:underline"
            target="_blank"
          >
            Click here to join
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Want to contribute?",
    img: "/assets/images/home/card2.jpg",
    content: (
      <>
        <p>
          Are you interested in transcribing or translating lyrics? Do you have
          rare photos or videos? If the answer is yes, contact us and help
          expand this website!
        </p>
        <p className="mt-2">
          <Link href="/about" className="font-bold hover:underline">
            Learn here how to contribute
          </Link>
        </p>
      </>
    ),
  },
  {
    title: "Check out our Blog!",
    img: "/assets/images/home/card3.jpg",
    content: (
      <>
        <p>
          Very soon we will be publishing new and exciting things we are working
          on for this website and for all the fans of Shocking Lemon.
        </p>
        <p className="mt-2">
          <Link href="/blog" className="font-bold hover:underline">
            Read more here
          </Link>
        </p>
      </>
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
