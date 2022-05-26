import React, { forwardRef } from "react";
import Image from "next/image";
import { Container, Dialog, Slide, Typography, Box } from "@mui/material/";
import { getStrapiMedia } from "../../../lib/media";
import BackButton from "./BackButton";
import CloseDialogIcon from "./CloseDialogIcon";
import ForwardButton from "./ForwardButton";

export const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Gallery = ({
  children,
  open,
  handleCloseDialog,
  singlePhoto,
  handlePrevPhoto,
  handleNextPhoto,
  setOpen,
}) => {
  const { image, title } = singlePhoto.attributes;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => setOpen(true)}
      TransitionComponent={Transition}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#060809", //override gallery modal background color
          justifyContent: "center",
        },
      }}
    >
      <CloseDialogIcon handleClose={handleCloseDialog} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ m: "0 auto" }}>
          <Image
            src={getStrapiMedia(image)}
            alt={title}
            width={999}
            height={666}
          />
        </Box>
        <BackButton handlePrevPhoto={handlePrevPhoto} />
        <ForwardButton handleNextPhoto={handleNextPhoto} />
      </Box>

      <Container maxWidth="lg" sx={{ mt: "3rem" }}>
        <Typography variant="h6" color="common.white">
          {title}
        </Typography>
        <Typography color="secondary" variant="body1" gutterBottom>
          by Ramon Garcia
        </Typography>
        {children} {/* //Thumbnails List */}
      </Container>
    </Dialog>
  );
};

export default Gallery;
