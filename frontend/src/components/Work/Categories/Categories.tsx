import { Box, Stack } from "@mui/material/";
import { Category_Card } from "../../../types/strapi/Work";
import CategoryCard from "./CategoryCard";

interface CategoryProps {
  category_card: Category_Card[];
}

const Categories = ({ category_card }: CategoryProps) => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {category_card.map((c, idx) => (
          <CategoryCard cardData={c} key={idx} />
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
