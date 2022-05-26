import { Box, Stack } from "@mui/material/";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {categories.map((c, idx) => (
          <Box key={idx}>
            <CategoryCard category={c} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
