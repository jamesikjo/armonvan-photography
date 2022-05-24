//http request method to api route
//qs is used to convert json object into a parameter string in the url
import qs from "qs";

export const getStrapiURL = (path = "") => {
  return `${process.env.NEXT_STRAPI_URL_API || "http://localhost:1337"}${path}`;
};

export const fetchData = async (path, paramsObj = {}, options = {}) => {
  console.log(path);
  console.log(paramsObj);
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(paramsObj);

  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
};
