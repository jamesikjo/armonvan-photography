import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import TransitionsModal from "../PhotoModal/PhotoModal";
import { getStrapiMedia } from "../../../lib/media";

const PhotoCard = ({ image }) => {
  const { alternativeText, title } = image.data.attributes;

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
          width: "100%",
          height: 320,
          position: "relative",
        }}
        onClick={handleModalOpen}
      >
        <Image
          src={getStrapiMedia(image)}
          alt={alternativeText}
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
            //important needed because AddIcon Root style has default font-size
          }}
        />
      </Box>
      <TransitionsModal
        image={image}
        title={title}
        open={open}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default PhotoCard;
