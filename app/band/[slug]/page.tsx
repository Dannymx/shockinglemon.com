import type { Metadata } from "next";

import { allMembers } from "@/.contentlayer/generated";
import MemberContainer from "@/components/Band/MemberContainer";
import MemberContent from "@/components/Band/MemberContent";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { getMemberName, getMemberSlugs } from "@/lib/utils";

export const dynamicParams = false;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;

  const member = allMembers.find((bio) => bio.slug === slug);

  if (member) {
    const name = `${getMemberName(member).at(0)} (${getMemberName(member).at(
      1,
    )})`;

    return {
      title: `${name}: ${member.role}`,
      ...(typeof OpenGraphConfig.member === "function"
        ? OpenGraphConfig.member({
            name,
            slug: member.slug,
          })
        : null),
    };
  }

  return {};
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const memberBios = allMembers.filter((memberBio) => memberBio.slug === slug);

  return (
    <div>
      <MemberContainer>
        <MemberContent bios={memberBios} />
      </MemberContainer>
    </div>
  );
}

export async function generateStaticParams() {
  return getMemberSlugs(allMembers).map((slug) => ({ slug }));
}
