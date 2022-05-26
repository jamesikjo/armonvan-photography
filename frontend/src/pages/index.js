import { Box } from "@mui/system";
import Landing from "../components/Landing";
import Layout from "../Layout";
import { fetchData } from "../lib/fetchData";

export default function Home({ photoData }) {
  const { data: landingPhotos } = photoData;
  return (
    <Layout title="Home">
      <Box pb={5}>
        <Landing landingPhotos={landingPhotos} />
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetchData("/homes", {
    populate: {
      photos: {
        //populate all relations in level- photos
        populate: "*",
      },
    },
  });
  return {
    props: { photoData: res.data[0].attributes.photos },
    revalidate: 20,
  };
};
