import type { Metadata } from "next";

import { allMembers } from "@/.contentlayer/generated";
import MemberContainer from "@/components/Band/MemberContainer";
import MemberContent from "@/components/Band/MemberContent";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { getMemberSlugs } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Band",
  ...(OpenGraphConfig.band ?? null),
};

const Band = () => {
  // get unique slugs of all the members
  const slugs = getMemberSlugs(allMembers);

  return (
    <div className="flex flex-col gap-4">
      {slugs.map((slug, i) => {
        const memberBios = allMembers.filter((member) => member.slug === slug);
        const reversed = i % 2 !== 0;

        return (
          <MemberContainer key={slug} reversed={reversed}>
            <MemberContent bios={memberBios} reversed={reversed} />
          </MemberContainer>
        );
      })}
    </div>
  );
};

export default Band;
