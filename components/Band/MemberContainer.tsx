import type { ReactNode } from "react";

interface Props {
  reversed?: boolean;
  children: ReactNode;
}

const MemberContainer = ({ reversed = false, children }: Props) => (
  <div
    className={`
      flex flex-col items-center
      sm:flex-row sm:items-start
      lg:items-center
      ${reversed ? "sm:flex-row-reverse" : null}
    `}
  >
    {children}
  </div>
);

export default MemberContainer;
