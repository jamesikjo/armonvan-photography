import { Box, Container, useMediaQuery } from "@mui/material";
import Contact from "../components/Contact";
import Layout from "../Layout";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <Container maxWidth="sm">
        <Contact />
      </Container>
    </Layout>
  );
};

export default ContactPage;
