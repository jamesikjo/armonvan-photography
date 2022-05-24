import React from "react";
import { Container } from "@mui/material";
import Contact from "./../components/Contact/";
import Layout from "../Layout";

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
