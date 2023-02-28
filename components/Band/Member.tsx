import Image from "next/image";
import styles from "components/Band/band.module.css";

type MemberProps = {
  member: {
    name: {
      en: string;
      jp: string;
    };
    img: string;
    content: JSX.Element;
  };
  reversed: boolean;
};

const Member = ({ member: { name, img, content }, reversed }: MemberProps) => (
  <div
    className={`flex flex-row items-center ${
      reversed ? "flex-row-reverse" : null
    }`}
  >
    <div className="relative flex aspect-[1/2] w-1/4 shrink-0 overflow-hidden rounded-xl shadow-md shadow-slate-500">
      <Image className="object-cover" alt={name.en} src={img} fill />
    </div>
    <div
      className={`z-10 flex flex-col rounded-md bg-white/75 p-6 shadow-md shadow-slate-500/25 ${
        reversed ? "-mr-6" : "-ml-6 pl-10"
      }`}
    >
      <h2 className="mb-2 text-3xl">
        <span className="font-bebas">{name.en}</span>
        <span> / </span>
        <span className="font-noto">{name.jp}</span>
      </h2>
      <div className={`${styles.member} columns-2`}>{content}</div>
    </div>
  </div>
);

export default Member;
