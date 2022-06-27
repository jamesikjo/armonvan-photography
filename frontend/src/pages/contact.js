import { Container } from "@mui/material";
import Contact from "./../components/Contact/";
import Layout from "../Layout";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <Container maxWidth="lg" sx={{ py: { sm: 10 } }}>
        <Contact />
      </Container>
    </Layout>
  );
};

export default ContactPage;
