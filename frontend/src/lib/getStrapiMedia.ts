import { getStrapiURL } from "./fetchData";
import { Image } from "../types/strapi/Shared";

interface Media {
  data: {
    attributes: Pick<Image["data"]["attributes"], "url">;
  };
}
export const getStrapiMedia = (media: Media) => {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
};
