import Link from "next/link";
import Image from "next/image";

import { Box, Typography } from "@mui/material/";
import { getStrapiMedia } from "../../../../lib/media";

const CategoryCard = ({ category }) => {
  const { name, cover, title } = category.attributes;
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
      <Link href={`/work/${name}`} passHref>
        <Box component="a">
          <Image
            src={getStrapiMedia(cover)}
            alt={name}
            width={cover.data.attributes.width}
            height={cover.data.attributes.height}
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
