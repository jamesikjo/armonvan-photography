//http request method to api route
//qs is used to convert json object into a parameter string in the url
import qs from "qs";

export const getStrapiURL = (path = "") => {
  return `${process.env.NEXT_STRAPI_URL_API || "http://localhost:1337"}${path}`;
};

export const fetchData = async (path, paramsObj = {}, params = null) => {
  const queryString = qs.stringify(paramsObj);
  let url;
  if (params !== null) {
    url = `${getStrapiURL(`/api/${path}/${params}`)}`;
  } else {
    url = `${getStrapiURL(
      `/api/${path}${queryString ? `?${queryString}` : ""}`
    )}`;
  }
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
};
