import type { Metadata } from "next";

import { allMembers } from "@/.contentlayer/generated";
import MemberContainer from "@/components/Band/MemberContainer";
import MemberContent from "@/components/Band/MemberContent";

export const metadata: Metadata = {
  title: "Band",
};

const Band = () => {
  // get unique slugs of all the members
  const slugs = allMembers
    .map((member) => member.slug)
    .filter((slug, i, arr) => arr.indexOf(slug) === i);

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
