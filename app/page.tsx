import {
  HomeCard,
  HomeCardBody,
  HomeCardImage,
  HomeCardTitle,
} from "components/Card/HomeCard";
import HomeHero from "components/Hero/Home";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { AppConfig } from "@/lib/AppConfig";
import { OpenGraphConfig } from "@/lib/OpenGraph";

export const metadata: Metadata = {
  title:
    "A fan community dedicated to Shocking Lemon with the most complete archive",
  ...(OpenGraphConfig.home ?? null),
};

const cards = [
  {
    title: "Join us on Discord!",
    img: "/assets/images/home/discord-bg.jpg?w=300&h=600&fit=crop&crop=focalpoint&fp-x=.5&fp-y=1&fp-z=1",
    content: (
      <React.Fragment>
        <p>
          Join our community of fans and chat with other fans about anything
          related to Shocking Lemon and more!
        </p>
        <p className="mt-2">
          <a
            href={AppConfig.discord}
            rel="noreferrer"
            target="_blank"
            className={`
              font-bold
              hover:underline
            `}
          >
            Click here to join
          </a>
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Want to contribute?",
    img: "/assets/images/home/card2.jpg",
    content: (
      <React.Fragment>
        <p>
          Are you interested in transcribing or translating lyrics? Do you have
          rare photos or videos? If the answer is yes, contact us and help
          expand this website!
        </p>
        <p className="mt-2">
          <Link
            href="/about"
            className={`
              font-bold
              hover:underline
            `}
          >
            Learn here how to contribute
          </Link>
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Check out our Blog!",
    img: "/assets/images/home/card3.jpg",
    content: (
      <React.Fragment>
        <p>
          Very soon we will be publishing new and exciting things we are working
          on for this website and for all the fans of Shocking Lemon.
        </p>
        <p className="mt-2">
          <Link
            href="/blog"
            className={`
              font-bold
              hover:underline
            `}
          >
            Read more here
          </Link>
        </p>
      </React.Fragment>
    ),
  },
];

export default function Page() {
  return (
    <React.Fragment>
      <HomeHero />
      <div
        className={`
          mx-auto grid max-w-(--breakpoint-lg) grid-cols-1 justify-center gap-6
          pt-10
          sm:grid-cols-2
          md:grid-cols-3
        `}
      >
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
    </React.Fragment>
  );
}
