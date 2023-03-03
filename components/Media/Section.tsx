import type { ReactNode } from "react";

const Section = ({ name, children }: { name: string; children: ReactNode }) => (
  <div className="rounded-xl bg-slate-100 p-6 shadow-md shadow-slate-500/25">
    <h1 className="mb-4 border-b border-b-slate-300 pb-2 font-bebas text-2xl">
      {name}
    </h1>
    <div>{children}</div>
  </div>
);

export default Section;
