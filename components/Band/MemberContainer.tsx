import type { ReactNode } from "react";

type Props = {
  reversed: boolean;
  children: ReactNode;
};

const MemberContainer = ({ reversed, children }: Props) => (
  <div
    className={`flex flex-col items-center sm:flex-row sm:items-start lg:items-center ${
      reversed ? "sm:flex-row-reverse" : null
    }`}
  >
    {children}
  </div>
);

export default MemberContainer;
