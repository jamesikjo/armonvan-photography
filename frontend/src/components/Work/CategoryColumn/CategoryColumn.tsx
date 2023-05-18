import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Category_Card } from "../../../types/strapi/Work";
import { getStrapiMedia } from "../../../lib/getStrapiMedia";

interface CategoryColumnProps {
  category_data: Category_Card[];
}

const Column = ({ category }: { category: Category_Card }) => {
  return (
    <Link href={`/work/${category.slug}`} passHref>
      <Box component="a">
        <Box
          boxShadow={1}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 1,
            "&:hover": {
              "& img": {
                transform: "scale(1.3)",
              },
            },
          }}
        >
          <Box
            component="img"
            height={1}
            width={1}
            src={getStrapiMedia(category.thumbnail)}
            alt="..."
            maxHeight={{ xs: 300, sm: 600, md: 1 }}
            sx={{
              transition: "transform .7s ease !important",
              transform: "scale(1.1)",
              objectFit: "cover",
              filter: "brightness(0.8)",
            }}
          />
          <Box position="absolute" bottom={0} left={0} right={0} padding={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                {category.title}
              </Typography>
              <Box
                component="img"
                src="/images/main-icon.png"
                alt="Icon"
                width={40}
                height={40}
                sx={{
                  transition: "transform .7s ease !important",
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(152deg) brightness(160%) contrast(103%)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

const CategoryColumn = ({ category_data }: CategoryColumnProps) => {
  const lightsAndSounds = category_data[0];
  const wildlife = category_data[1];
  const landscapes = category_data[2];

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Column category={lightsAndSounds} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column category={wildlife} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column category={landscapes} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryColumn;
