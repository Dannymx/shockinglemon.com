export interface Record {
  slug: string;
  name: {
    en: string;
    jp: string | null;
  };
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
  songs: {
    name: string;
    length: string;
  }[];
  images: {
    cover: boolean;
    other: string[];
  };
}
