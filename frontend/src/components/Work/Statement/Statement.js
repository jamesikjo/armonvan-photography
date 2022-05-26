import { Typography, Box } from "@mui/material";

const Statement = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        color="primary"
        fontWeight="bold"
        align="center"
        mb={1}
        sx={{ letterSpacing: "0.15rem" }}
      >
        ARTIST STATEMENT
      </Typography>
      <Typography variant="subtitle1" color="secondary" align="center" mb={2}>
        My focus is on outdoor events, live perfomances and wildlife
        photography. I specialize in capturing moments through long exposure and
        in low light. Click on a category to view some of my captures.
      </Typography>
    </Box>
  );
};

export default Statement;
