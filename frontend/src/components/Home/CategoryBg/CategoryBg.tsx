import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface CategoryBgProps {
  toggleModal: () => void;
  title: string;
}

const CategoryBg = ({ toggleModal, title }: CategoryBgProps) => {
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
        {title}
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

export default CategoryBg;
