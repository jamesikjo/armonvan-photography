import { Image } from "./Shared";

export interface Landing {
  id: number;
  attributes: {
    photos: LandingPhoto[];
  };
}

export interface LandingPhoto {
  id: number;
  image: Image;
  photographer: string;
  position: number;
  title: string;
}
