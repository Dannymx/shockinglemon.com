import { useMDXComponent } from "next-contentlayer/hooks";

type MdxProps = {
  code: string;
};

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Mdx;
