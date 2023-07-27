type BasicObject = {
  test: string;
};

export type BasicType = Record<
  string,
  ({ name, slug }: { name: string; slug: string }) => BasicObject
>;
