import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import Contact from "../components/Contact";
import Layout from "../Layout";

const ContactPage = () => {
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
      <Layout title="Contact">
        <Container maxWidth="sm">
          <Contact />
        </Container>
      </Layout>
    </Box>
  );
};

export default ContactPage;
