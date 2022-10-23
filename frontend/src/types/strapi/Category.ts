import { Image } from "./Shared";

export interface Category {
  id: number;
  attributes: {
    collection: Collection;
    slug: string;
    title: string;
  };
}

export interface Collection {
  id: number;
  images: CollectionImage[];
}

export interface CollectionImage {
  id: number;
  image: Image;
  photographer: string;
  position: number;
  title: string;
}
