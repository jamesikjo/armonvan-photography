import { getStrapiURL } from "./fetchData";

//media should be the media field name ("cover, photo, image")
export const getStrapiMedia = (media) => {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
};
