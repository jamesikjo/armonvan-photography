import React from "react";
import { Container } from "@mui/material";
import Layout from "../layouts";
import Contact from "./../components/Contact/index";

const ContactPage = () => {
  return (
    <Layout>
      <Container disableGutters sx={{ px: { lg: 3 } }}>
        <Contact />
      </Container>
    </Layout>
  );
};

export default ContactPage;
