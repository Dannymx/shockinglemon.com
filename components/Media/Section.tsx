import type { ReactNode } from "react";

const Section = ({ name, children }: { name: string; children: ReactNode }) => (
  <div className="sl-content-box">
    <h1 className="mb-4 border-b border-b-border pb-2 font-bebas text-2xl">
      {name}
    </h1>
    <div>{children}</div>
  </div>
);

export default Section;
