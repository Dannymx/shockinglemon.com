type Props = {
  src: string;
  width: string;
  quality?: number;
  auto?: boolean;
};

const imgixLoader = ({ src, width, quality, auto }: Props) =>
  `https://shockinglemon.imgix.net${src}?w=${width}&auto=${
    auto === false ? "false" : "format"
  }&q=${quality ?? 100}`;

export default imgixLoader;
