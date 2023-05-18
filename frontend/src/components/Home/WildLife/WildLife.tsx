import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LandingSections } from "../../../pages";

const WildLife = ({ toggleModal }: LandingSections) => {
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
        WildLife
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          size="large"
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

export default WildLife;
