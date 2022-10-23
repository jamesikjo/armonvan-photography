import type { GetStaticProps } from "next";
import { Box } from "@mui/system";
import Landing from "../components/Landing";
import Layout from "../Layout";
import { fetchData } from "../lib/fetchData";
import { Landing as LandingPhotos } from "../types/strapi/Landing";

interface APICall {
  landingPhotos: LandingPhotos; //Landing renamed -> LandingPhotos (see import)
}

export default function Home({ landingPhotos }: APICall) {
  const { photos } = landingPhotos.attributes;
  return (
    <Layout title="Home">
      <Box pb={5}>
        <Landing landingPhotos={photos} />
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res: { data: LandingPhotos } = await fetchData("/landing", {
    populate: {
      photos: {
        //populate all relations in level- photos
        populate: "*",
      },
    },
  });
  return {
    props: {
      landingPhotos: res.data,
    },
    revalidate: 30,
  };
};
