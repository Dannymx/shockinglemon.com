import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import type { Member } from "@/.contentlayer/generated";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (input: string | number): string =>
  new Date(input).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const getMemberSlugs = (members: Member[]) =>
  members
    .map((member) => member.slug)
    .filter((slug, i, arr) => arr.indexOf(slug) === i);

export const getMemberName = (member: Member) => {
  const name = member?.name.split("/");

  return [name[0]?.trim(), name[1]?.trim()];
};
