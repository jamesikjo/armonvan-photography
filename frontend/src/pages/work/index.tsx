import type { GetStaticProps } from "next";
import { fetchData } from "../../lib/fetchData";
import { Container } from "@mui/material";
import Layout from "../../Layout";
import Categories from "../../components/Work/Categories";
import { Statement } from "../../components/Work";
import { Work as WorkData } from "../../types/strapi/Work";

interface APICall {
  workData: WorkData;
}

const Work = ({ workData }: APICall) => {
  const { category_card, title, subtitle } = workData.attributes;

  return (
    <Layout title="Work | Gallery">
      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5, md: 8 } }}>
        <Statement title={title} subtitle={subtitle} />
        <Categories category_card={category_card} />
      </Container>
    </Layout>
  );
};

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  const workRes: { data: WorkData } = await fetchData("/work", {
    populate: {
      category_card: {
        //populate all relations in category_card level
        populate: "*",
      },
    },
  });
  return {
    props: {
      workData: workRes.data,
    },
    revalidate: 15,
  };
};
