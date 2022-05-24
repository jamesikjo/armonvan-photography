import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Divider, Grid, Typography, Button, Stack } from "@mui/material";

const Footer = ({ pages }) => {
  const router = useRouter();

  return (
    <Grid container direction="column" alignItems="center" py={4}>
      <Grid item sx={{ height: 60 }}>
        <Image
          src="/images/footer-logo.png"
          alt="footer"
          width={150}
          height={55}
        />
      </Grid>
      <Grid item pb={1}>
        <Stack direction="row">
          {pages.map(({ title, path }, i) => (
            <React.Fragment key={i}>
              <Button
                variant="text"
                color="primary"
                sx={{
                  py: 0,
                  fontSize: "0.75em",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => router.push(path)}
              >
                {title}
              </Button>
              {i < pages.length - 1 && (
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
        <Typography variant="body2" color="primary" sx={{ fontSize: 10 }}>
          © {new Date().getFullYear()} AV-Photography. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
