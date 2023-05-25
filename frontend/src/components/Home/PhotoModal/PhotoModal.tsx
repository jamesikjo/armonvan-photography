import NextImage from "next/image";
import { Modal, Backdrop, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PhotoModalProps {
  image: string;
  open: boolean;
  handleModalClose: () => void;
}

const PhotoModal = ({ image, open, handleModalClose }: PhotoModalProps) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-shows"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { sx: { backgroundColor: "#020303 ", opacity: 0.9 } },
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: { lg: "100%" },
          }}
        >
          <NextImage src={image} width={999} height={666} />
          <IconButton
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              top: "0%",
              right: "0%",
              color: "#fff",
            }}
          >
            <CloseIcon sx={{ fontSize: "2rem", color: "#fff" }} />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default PhotoModal;
