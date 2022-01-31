import Head from "next/head";
import Main from "../components/LandingPage";
import { fetchData } from "../utils/fetchData";
import Layout from "./../layouts/index";

export default function Home({ photoData }) {
  const { data: landingPhotos } = photoData;
  return (
    <Layout setHeight="none">
      <Head>
        <title>Armon Van Photography</title>
        <meta name="description" content="Armon Van Photography" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Main landingPhotos={landingPhotos} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const photoData = await fetchData("homes", {
    populate: {
      photos: {
        //populate all relations in level- photos
        populate: "*",
      },
    },
  });
  return {
    props: { photoData: photoData.data[0].attributes.photos },
    revalidate: 20,
  };
};
