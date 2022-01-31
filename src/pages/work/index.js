import React from "react";
import { fetchData } from "../../utils/fetchData";
import { Container } from "@mui/material";
import Layout from "../../layouts";
import Categories from "../../components/Work/Categories";
import Statement from "./../../components/Work/Statement/index";

const Work = ({ categories }) => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: { xs: 5, sm: 10 } }}>
        <Statement />
        <Categories categories={categories} />
      </Container>
    </Layout>
  );
};

export default Work;

export const getStaticProps = async () => {
  const categories = await fetchData("categories", { populate: "*" });
  return { props: { categories: categories.data }, revalidate: 15 }; //urlList: urlList
};
