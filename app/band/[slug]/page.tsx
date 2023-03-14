import type { Metadata } from "next";

import { allMembers } from "@/.contentlayer/generated";
import MemberContainer from "@/components/Band/MemberContainer";
import MemberContent from "@/components/Band/MemberContent";
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

  return {
    title: member ? getMemberName(member).at(0) : "Member not found",
  };
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
