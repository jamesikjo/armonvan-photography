import React from "react";
import CardModal from "./CardModal";
import { Container, Grid } from "@mui/material";

const Main = ({ landingPhotos }) => {
  return (
    <>
      {landingPhotos.length && (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {landingPhotos.map((p, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <CardModal image={p.attributes.image} title={p.title} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Main;
