import { Container, Grid } from "@mui/material";
import { LandingPhoto } from "../../types/strapi/Landing";
import PhotoCard from "./PhotoCard";

interface LandingProps {
  landingPhotos: LandingPhoto[];
}

const Landing = ({ landingPhotos }: LandingProps) => {
  return (
    <>
      {landingPhotos.length && (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {landingPhotos.map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <PhotoCard image={p.image} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Landing;
