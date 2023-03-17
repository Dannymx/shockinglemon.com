import type { Metadata } from "next";

import { allMembers } from "@/.contentlayer/generated";
import MemberContainer from "@/components/Band/MemberContainer";
import MemberContent from "@/components/Band/MemberContent";
import { OpenGraphConfig } from "@/lib/AppConfig";
import { getMemberName, getMemberSlugs } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const member = allMembers.find((bio) => bio.slug === slug);

  if (member) {
    return {
      title: getMemberName(member).at(0),
      ...(typeof OpenGraphConfig.member === "function"
        ? OpenGraphConfig.member({
            name: member.name,
            slug: member.slug,
          })
        : null),
    };
  }

  return {};
};

export default function Member({ params: { slug } }: Props) {
  const memberBios = allMembers.filter((memberBio) => memberBio.slug === slug);

  return (
    <div>
      <MemberContainer>
        <MemberContent bios={memberBios} />
      </MemberContainer>
    </div>
  );
}

export const generateStaticParams = () =>
  getMemberSlugs(allMembers).map((slug) => ({ slug }));
