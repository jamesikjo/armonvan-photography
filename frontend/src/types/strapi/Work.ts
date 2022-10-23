import { Image } from "./Shared";

export interface Work {
  attributes: {
    title: string;
    subtitle: string;
    category_card: Category_Card[];
  };
}

export interface Category_Card {
  id: number;
  slug: string;
  title: string;
  thumbnail: Image;
}
