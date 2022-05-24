import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Box, CardMedia, Typography } from "@mui/material/";
import { getStrapiMedia } from "./../../../../utils/media";

const CategoryCard = ({ category }) => {
  const { name, cover, title } = category.attributes;
  return (
    <Box
      position="relative"
      py={1}
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
        <a>
          <Image
            src={getStrapiMedia(cover)}
            alt={name}
            width={400}
            height={280}
          />
        </a>
        {/* <CardMedia
          component="a"
          image={getStrapiMedia(cover)}
          title={name}
          sx={{ height: 280, width: { xs: 350, md: 400 } }}
        /> */}
      </Link>
      <Typography
        variant="h6"
        fontWeight="500"
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
  );
};

export default CategoryCard;
