import React from "react";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import { Page } from "../../types/strapi/Shared";

// interface FooterProps {
//   pages: Page[];
// }

const Footer = () => {
  return (
    <Box component="footer" py={2}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Image
            src="/images/main-icon.png"
            alt="footer"
            width={50}
            height={50}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography color="primary" sx={{ fontSize: 10, lineHeight: 1.6 }}>
            © {new Date().getFullYear()} ArmonVan-Photography. <br /> All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
