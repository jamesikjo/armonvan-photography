import React, { useState } from "react";
import NextImage from "next/image";
import { Box } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import PhotoModal from "../PhotoModal";
import { getStrapiMedia } from "../../../lib/getStrapiMedia";
import { Image } from "../../../types/strapi/Shared";

interface PhotoCardProps {
  image: Image;
}

const PhotoCard = ({ image }: PhotoCardProps) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          "&:hover": {
            "& .addIcon": {
              opacity: 1,
              transition: "all 0.4s ease-in-out",
            },
            opacity: 0.7,
            transition: "all 0.4s ease-in-out",
            cursor: "pointer",
          },
          width: "auto",
          height: { xs: 300, md: 325 },
          position: "relative",
        }}
        onClick={handleModalOpen}
      >
        <NextImage
          src={getStrapiMedia(image)}
          layout="fill"
          objectFit="cover"
          priority
        />
        <AddIcon
          className="addIcon"
          sx={{
            opacity: 0,
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            color: "#fff",
            fontSize: "3.5rem",
          }}
        />
      </Box>
      <PhotoModal
        image={image}
        open={open}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default PhotoCard;
