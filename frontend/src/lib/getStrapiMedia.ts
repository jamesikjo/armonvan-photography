import { buildUrl } from "cloudinary-build-url";
import { getStrapiURL } from "./fetchData";
import { Image } from "../types/strapi/Shared";

interface Media {
  data: {
    attributes: Pick<Image["data"]["attributes"], "url">;
  };
}

//generate cloudinary image url from various image sources
// const getCloudinaryUrl = (url: string) => {
//   build cloudinary url with desired image size and format
//   const src = buildUrl(url, {
//     cloud: {
//       cloudName: "",
//     },
//     transformations: {
//       resize: {
//         type: "pad",
//         height: 666,
//       },
//     },
//   });
//   return src;
// };

// export const getStrapiMedia = (media: Media) => {
//   const { url } = media.data.attributes;
//   const cloudinaryUrl = getCloudinaryUrl(url);
//   console.log(cloudinaryUrl);
//   const imageUrl = cloudinaryUrl.startsWith("/") ? getStrapiURL(url) : url;
//   return imageUrl;
// };

export const getStrapiMedia = (media: Media) => {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
};
