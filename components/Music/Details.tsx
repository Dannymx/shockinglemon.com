import type { ReactNode } from "react";
import styles from "./music.module.css";

type Props = {
  text: ReactNode;
  value: ReactNode;
};

export const Row = ({ text, value }: Props) => (
  <tr>
    <td className={`${styles.cell} whitespace-nowrap pr-8`}>{text}</td>
    <td className={`${styles.cell} w-full`}>{value}</td>
  </tr>
);
