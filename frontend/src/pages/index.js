import Head from "next/head";
import Landing from "../components/Landing";
import Layout from "../Layout";
import { fetchData } from "../utils/fetchData";

export default function Home({ photoData }) {
  const { data: landingPhotos } = photoData;
  return (
    <Layout setHeight="none">
      <Head>
        <title>Armon Van Photography</title>
        <meta name="description" content="Armon Van Photography" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Landing landingPhotos={landingPhotos} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const photoData = await fetchData("/homes", {
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
