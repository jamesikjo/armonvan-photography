import type { GetStaticProps } from "next";
import { fetchData } from "../../lib/fetchData";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import Layout from "../../Layout";
import { Statement, CategoryColumn } from "../../components/Work";
import { Work as WorkData } from "../../types/strapi/Work";

interface APICall {
  workData: WorkData;
}

const Work = ({ workData }: APICall) => {
  const { category_card, title, subtitle } = workData.attributes;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
      mt={isMd ? 0 : 14}
    >
      <Layout title="Work | Gallery">
        <Container maxWidth="lg">
          <Statement title={title} subtitle={subtitle} />
          <CategoryColumn category_data={category_card} />
        </Container>
      </Layout>
    </Box>
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
    revalidate: 30,
  };
};
