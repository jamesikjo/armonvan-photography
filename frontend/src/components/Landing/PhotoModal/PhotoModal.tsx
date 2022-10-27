import NextImage from "next/image";
import { Modal, Backdrop, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getStrapiMedia } from "../../../lib/getStrapiMedia";
import { Image } from "../../../types/strapi/Shared";

interface PhotoModalProps {
  image: Image;
  open: boolean;
  handleModalClose: () => void;
}

const PhotoModal = ({ image, open, handleModalClose }: PhotoModalProps) => {
  const { width, height, name } = image.data.attributes;

  return (
    <>
      <Modal
        aria-labelledby={`transition-modal-${name}`}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: { backgroundColor: "#020303 ", opacity: 0.9 },
        }}
      >
        <Box
          sx={{
            width: "auto",
            maxWidth: { lg: "70%" },
          }}
        >
          <NextImage
            src={getStrapiMedia(image)}
            width={width}
            height={height}
          />
          <IconButton
            onClick={handleModalClose}
            sx={{ position: "absolute", top: "2%", right: "4%", color: "#fff" }}
          >
            <CloseIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default PhotoModal;
