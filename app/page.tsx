import {
  HomeCard,
  HomeCardBody,
  HomeCardFooter,
  HomeCardImage,
  HomeCardTitle,
} from "components/Card/HomeCard";
import HomeHero from "components/Hero/Home";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { AppConfig } from "@/lib/AppConfig";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title:
    "A fan community dedicated to Shocking Lemon with the most complete archive",
  ...(OpenGraphConfig.home ?? null),
};

interface InternalCard {
  title: string;
  img: string;
  description: string;
  buttonText: string;
  href: "/about" | "/blog" | "/music" | "/band" | "/media";
  external: false;
}

interface ExternalCard {
  title: string;
  img: string;
  description: string;
  buttonText: string;
  href: string;
  external: true;
}

const cards: (InternalCard | ExternalCard)[] = [
  {
    title: "Join us on Discord!",
    img: "/assets/images/home/discord-bg.jpg?w=300&h=600&fit=crop&crop=focalpoint&fp-x=.5&fp-y=1&fp-z=1",
    description:
      "Join our community of fans and chat with other fans about anything related to Shocking Lemon and more!",
    buttonText: "Join now",
    href: AppConfig.discord,
    external: true,
  },
  {
    title: "Want to contribute?",
    img: "/assets/images/home/card2.jpg",
    description:
      "Are you interested in transcribing or translating lyrics? Do you have rare photos or videos? If the answer is yes, contact us and help expand this website!",
    buttonText: "Learn more",
    href: "/about",
    external: false,
  },
  {
    title: "Check out our Blog!",
    img: "/assets/images/home/card3.jpg",
    description:
      "Very soon we will be publishing new and exciting things we are working on for this website and for all the fans of Shocking Lemon.",
    buttonText: "Read more",
    href: "/blog",
    external: false,
  },
];

export default function Page() {
  return (
    <React.Fragment>
      <HomeHero />
      <div
        className={`
          mx-auto grid max-w-(--breakpoint-lg) grid-cols-1 items-stretch
          justify-center gap-6 pt-10
          sm:grid-cols-2
          md:grid-cols-3
        `}
      >
        {cards.map((card) => (
          <HomeCard key={card.img}>
            <HomeCardImage imgSrc={card.img} />
            <HomeCardBody>
              <HomeCardTitle>{card.title}</HomeCardTitle>
              <p className="mt-2">{card.description}</p>
              <HomeCardFooter>
                {card.external ? (
                  <a
                    className={cn(buttonVariants({ size: "sm" }))}
                    href={card.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {card.buttonText}
                  </a>
                ) : (
                  <Link
                    className={cn(buttonVariants({ size: "sm" }))}
                    href={card.href}
                  >
                    {card.buttonText}
                  </Link>
                )}
              </HomeCardFooter>
            </HomeCardBody>
          </HomeCard>
        ))}
      </div>
    </React.Fragment>
  );
}
