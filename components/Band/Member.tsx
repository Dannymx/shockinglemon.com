import Image from "next/image";
import Content from "./Content";

type MemberProps = {
  member: {
    name: {
      en: string;
      jp: string;
    };
    img: string;
    content: {
      en: JSX.Element;
      jp: JSX.Element;
    };
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
      className={`flex flex-col rounded-md bg-white/75 p-6 shadow-md shadow-slate-500/25 ${
        reversed ? "-mr-6 pr-12" : "-ml-6 pl-12"
      }`}
    >
      <Content name={name} content={content} />
    </div>
  </div>
);

export default Member;
