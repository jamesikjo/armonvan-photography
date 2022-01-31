import React from "react";
import { Stack, Typography } from "@mui/material";

const Statement = () => {
  return (
    <Stack alignItems="center">
      <Typography
        variant="h5"
        color="primary"
        fontWeight="bold"
        sx={{ letterSpacing: "0.2rem" }}
        gutterBottom
      >
        ARTIST STATEMENT
      </Typography>
      <Typography variant="subtitle1" color="secondary" align="center" mb={2}>
        My focus is on outdoor events, live perfomances and wildlife
        photography. I specialize in capturing moments through long exposure and
        in low light. Click on a category to view some of my captures.
      </Typography>
    </Stack>
  );
};

export default Statement;
