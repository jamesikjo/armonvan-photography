import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { fetchData } from "../../lib/fetchData";
import { Box } from "@mui/system";
import ImageGallery from "../../components/Work/ImageGallery";
import { Category } from "../../types/strapi/Category";

interface APICall {
  singleCategory: Category;
}

const PhotoGallery = ({ singleCategory }: APICall) => {
  const { images } = singleCategory.attributes.collection;

  return (
    <>
      <Head>
        <title>{singleCategory.attributes.title}</title>
      </Head>
      <Box bgcolor="#020303 " height="100vh">
        <ImageGallery photoList={images} />
      </Box>
    </>
  );
};
export default PhotoGallery;

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryListRes: { data: Category[] } = await fetchData("/categs", {
    populate: {
      populate: "*",
    },
  });

  return {
    paths: categoryListRes.data.map((category) => ({
      params: {
        //category key needs to match the file name [category].js under pages
        category: category.attributes.slug,
      },
    })),
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  category: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as IParams;

  const singleCategoryRes: { data: [Category] } = await fetchData("/categs", {
    filters: { slug: category },
    //Deeply populate 2-levels & image
    populate: ["collection", "collection.images", "collection.images.image"],
  });
  return {
    props: {
      singleCategory: singleCategoryRes.data[0],
    },
    revalidate: 15,
  };
};
