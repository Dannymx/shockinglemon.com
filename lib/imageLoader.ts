type Props = {
  src: string;
  width: string;
  quality?: number;
};

const imgixLoader = ({ src, width, quality }: Props) =>
  `https://shockinglemon.imgix.net${src}?w=${width}&q=${quality ?? 100}`;

export default imgixLoader;
