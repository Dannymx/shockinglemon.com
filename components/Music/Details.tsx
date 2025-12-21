import type { ReactNode } from "react";

import styles from "./music.module.css";

interface Props {
  text: ReactNode;
  value: ReactNode;
}

export const Row = ({ text, value }: Props) => (
  <tr>
    <td
      className={`
        ${styles.cell}
        pr-8 whitespace-nowrap
      `}
    >
      {text}
    </td>
    <td
      className={`
        ${styles.cell}
        w-full
      `}
    >
      {value}
    </td>
  </tr>
);
