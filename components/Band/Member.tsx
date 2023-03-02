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
    className={`flex flex-col items-center sm:flex-row sm:items-start lg:items-center ${
      reversed ? "sm:flex-row-reverse" : null
    }`}
  >
    <div className="relative -mb-10 flex h-[300px] w-11/12 shrink-0 overflow-hidden rounded-xl shadow-md shadow-slate-500 sm:mb-0 sm:mt-8 sm:aspect-[1/2] sm:h-auto sm:w-1/3 md:w-1/4 lg:m-0">
      <Image
        className="object-cover object-top sm:object-center"
        alt={name.en}
        src={img}
        fill
      />
    </div>
    <div
      className={`flex flex-col rounded-md bg-white/75 p-6 pt-14 shadow-md shadow-slate-500/25 sm:pt-6 ${
        reversed ? "sm:-mr-6 sm:pr-12" : "sm:-ml-6 sm:pl-12"
      }`}
    >
      <Content name={name} content={content} />
    </div>
  </div>
);

export default Member;
