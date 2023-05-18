import { Box, Container, useMediaQuery } from "@mui/material";
import Contact from "../components/Contact";
import Layout from "../Layout";

const ContactPage = () => {
  const mediaXXS = useMediaQuery("(max-width:390px)");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mt={mediaXXS ? 14 : 0}
    >
      <Layout title="Contact">
        <Container maxWidth="sm">
          <Contact />
        </Container>
      </Layout>
    </Box>
  );
};

export default ContactPage;
