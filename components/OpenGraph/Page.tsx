import type { ReactNode } from "react";

type Props = {
  img: string;
  children: ReactNode;
};

export const CardContent = ({ img, children }: Props) => (
  <div tw="flex h-full w-full pb-10 items-end flex-row">
    <img tw="absolute top-0 left-0" src={img} alt="" />
    <div tw="flex flex-col py-6 px-10 bg-black/50 w-full">{children}</div>
  </div>
);
