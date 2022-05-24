import React from "react";
import { Box, Stack, Container } from "@mui/material/";
import CategoryCard from "./Card";

const Categories = ({ categories }) => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
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
