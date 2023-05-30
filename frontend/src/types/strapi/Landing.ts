import { Image } from "./Shared";

export interface LandingAbout {
  title: string;
  description: string;
  image: Image;
}

export interface LandingPhoto {
  id: number;
  image: Image;
  photographer: string;
  position: number;
  title: string;
}
