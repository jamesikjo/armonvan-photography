import { fetchData } from "../../lib/fetchData";
import { Container } from "@mui/material";
import Layout from "../../Layout";
import Categories from "../../components/Work/Categories";
import { Statement } from "../../components/Work";

const Work = ({ categories }) => {
  return (
    <Layout title="Work">
      <Container maxWidth="md" sx={{ py: { sm: 10 } }}>
        <Statement />
        <Categories categories={categories} />
      </Container>
    </Layout>
  );
};

export default Work;

export const getStaticProps = async () => {
  const categories = await fetchData("/categories", { populate: "*" });
  return { props: { categories: categories.data }, revalidate: 15 }; //urlList: urlList
};
