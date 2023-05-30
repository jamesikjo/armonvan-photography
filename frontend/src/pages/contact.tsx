import type { GetStaticProps } from "next";
import { Container } from "@mui/material";
import Contact from "../components/Contact";
import Layout from "../Layout";
import { fetchData } from "../lib/fetchData";

interface APICall {
  contactData: {
    description: string;
  };
}
const ContactPage = ({ contactData }: APICall) => {
  return (
    <Layout title="Contact">
      <Container maxWidth="sm">
        <Contact description={contactData.description} />
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  const contactRes = await fetchData("/contact");

  const contactData = contactRes.data.attributes;
  return {
    props: {
      contactData,
    },
    revalidate: 60,
  };
};
