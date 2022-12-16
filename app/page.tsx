import HomeHero from "components/Hero/Home";

export default function Page() {
  return (
    <>
      <HomeHero />
      {/* <div className="flex justify-center gap-6 pt-16">
        {cards.map((card) => (
          <HomeCard key={card.img}>
            <HomeCardImage imgSrc={card.img} />
            <HomeCardBody>
              <HomeCardTitle>{card.title}</HomeCardTitle>
              {card.content}
            </HomeCardBody>
          </HomeCard>
        ))}
      </div> */}
    </>
  );
}
