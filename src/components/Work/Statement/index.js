import React from "react";
import { Typography, Box, Divider } from "@mui/material";

const Statement = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        color="primary"
        fontWeight="bold"
        sx={{ letterSpacing: "0.2rem" }}
        align="center"
        gutterBottom
      >
        ARTIST STATEMENT
      </Typography>
      <Typography variant="subtitle1" color="secondary" align="center" mb={3}>
        My focus is on outdoor events, live perfomances and wildlife
        photography. I specialize in capturing moments through long exposure and
        in low light. Click on a category to view some of my captures.
      </Typography>
    </Box>
  );
};

export default Statement;
