import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material/";
import { getStrapiMedia } from "../../../../lib/getStrapiMedia";
import { Category_Card } from "../../../../types/strapi/Work";

interface CategoryCardProps {
  cardData: Category_Card;
}

const CategoryCard = ({ cardData }: CategoryCardProps) => {
  const { title, thumbnail, slug } = cardData;

  return (
    <Box
      position="relative"
      width={{ xs: 350, md: 400 }}
      sx={{
        "&:hover": {
          "& img": {
            opacity: 0.8,
            transition: "all 0.4s ease-in-out",
          },
          "& h6": {
            opacity: 1,
            transition: "all 0.4s ease-in-out",
          },
        },
      }}
    >
      <Link href={`/work/${slug}`} passHref>
        <Box component="a">
          <Image
            src={getStrapiMedia(thumbnail)}
            alt={title}
            width={thumbnail.data.attributes.width}
            height={thumbnail.data.attributes.height}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default CategoryCard;
