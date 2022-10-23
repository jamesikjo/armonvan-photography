import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Divider, Grid, Typography, Button, Stack } from "@mui/material";
import { Page } from "../../types/strapi/Shared";

interface FooterProps {
  pages: Page[];
}

const Footer = ({ pages }: FooterProps) => {
  const router = useRouter();

  return (
    <Grid container direction="column" alignItems="center" pb={4}>
      <Grid item>
        <Image
          src="/images/armonvan-footer-logo.png"
          alt="footer"
          width={155}
          height={55}
        />
      </Grid>
      <Grid item pb={2}>
        <Stack direction="row">
          {pages.slice(0, 3).map(({ title, path }, i) => (
            <React.Fragment key={i}>
              <Button
                variant="text"
                color="primary"
                sx={{
                  py: 0,
                  fontWeight: "600",
                  fontSize: "0.75em",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => router.push(path)}
              >
                {title}
              </Button>
              {i < pages.length - 2 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    margin: "0rem 0.5rem",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="primary"
          align="center"
          sx={{ fontSize: 8 }}
        >
          © {new Date().getFullYear()} ArmonVan-Photography. <br /> All rights
          reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
