export type Record = {
  slug: string;
  name: string;
  release: string;
  price: {
    currency: string;
    price: number;
  };
  format: string;
  medium: string[];
  labels: string[];
  catalog: string;
  barcode: string;
  songs: Array<{
    name: string;
    length: string;
  }>;
  images: {
    cover: boolean;
    other: string[];
  };
};
