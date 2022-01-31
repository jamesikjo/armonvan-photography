import React from "react";
import Image from "next/image";
import {
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  TextField,
  Typography,
  Box,
} from "@mui/material/";

const Contact = () => {
  return (
    <Box component="form">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ padding: { xs: 4, lg: 0 } }}
      >
        <Grid
          item
          container
          lg={6}
          direction="column"
          sx={{ maxWidth: { xs: 550, lg: 1 }, pb: { xs: 5, lg: 0 } }}
        >
          <Grid item mb={1}>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
              gutterBottom
              sx={{ letterSpacing: "0.2rem" }}
            >
              CONTACT
            </Typography>
            <Divider
              sx={{
                m: "1em 0em",
              }}
            />
            <Typography variant="subtitle1" color="primary">
              Do you feel connected with my photos? Do you have a question or
              would you like to collaborate in one way or another? I would love
              to hear from you.
            </Typography>
          </Grid>

          <Grid item mb={1}>
            <TextField
              required
              id="name-field"
              label="Name"
              name="name"
              fullWidth
              variant="standard"
              //   value={state.name}
              //   onChange={handleChange}
              inputProps={{ minLength: 2 }}
            />
          </Grid>
          <Grid item mb={4}>
            <TextField
              required
              id="email-field"
              label="Email"
              type="email"
              name="email"
              variant="standard"
              //   value={state.email}
              //   onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item mb={3}>
            <Typography variant="body1" color="secondary" gutterBottom>
              Message
            </Typography>
            <TextField
              required
              id="message-field"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              //   value={state.message}
              //   onChange={handleChange}
              inputProps={{ maxLength: 200 }}
            />
          </Grid>

          <Grid item align="center">
            <Button variant="outlined" type="submit">
              Submit
            </Button>
            {/* {success && (
              <Typography color="primary" variant="body1">
                Thanks for your message!
              </Typography>
            )} */}
          </Grid>
        </Grid>

        <Hidden smDown>
          <Grid item lg={6}>
            <Container maxWidth="sm">
              <Image
                src="/images/profile-shot.jpg"
                alt="profile"
                width={640}
                height={427}
                priority
              />
            </Container>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default Contact;
