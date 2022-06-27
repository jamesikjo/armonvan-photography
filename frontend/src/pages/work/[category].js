import { fetchData } from "../../lib/fetchData";
import { Box } from "@mui/system";
import ImageGallery from "../../components/Work/ImageGallery";

const PhotoGallery = ({ photos }) => {
  const { data: photoList } = photos;

  return (
    <Box bgcolor="#000000" height={"100vh"}>
      <ImageGallery photoList={photoList} />
    </Box>
  );
};
export default PhotoGallery;

export const getStaticPaths = async () => {
  const categoriesRes = await fetchData("/categories", { fields: ["name"] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        //category key needs to match the file name [category].js under pages
        category: category.attributes.name,
      },
    })),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchData("/categories", {
    filters: { name: params.category },
    populate: {
      photos: {
        sort: ["id:asc"],
        //populate all relations in level- photos
        populate: "*",
      },
    },
  });

  return {
    props: {
      photos: matchingCategories.data[0].attributes.photos,
    },
    revalidate: 15,
  };
}
