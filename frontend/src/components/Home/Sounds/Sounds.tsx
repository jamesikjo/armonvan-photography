/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LandingSections } from "../../../pages";

const Sounds = ({ toggleModal }: LandingSections) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Typography
        variant={isSm ? "h2" : "h3"}
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        Lights / <br /> Sounds
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={toggleModal}
          sx={{
            color: "#fff",
          }}
        >
          View Image
        </Button>
      </Box>
    </Box>
  );
};

export default Sounds;
