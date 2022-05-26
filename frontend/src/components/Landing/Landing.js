import { Container, Grid } from "@mui/material";
import PhotoCard from "./PhotoCard/PhotoCard";

const Landing = ({ landingPhotos }) => {
  return (
    <>
      {landingPhotos.length && (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {landingPhotos.map((p, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <PhotoCard image={p.attributes.image} title={p.title} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Landing;
