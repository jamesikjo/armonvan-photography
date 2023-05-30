import NextImage from "next/image";
import { Modal, Backdrop, IconButton, Box, Container } from "@mui/material";
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
          backdrop: { sx: { backgroundColor: "#0c1212", opacity: 0.9 } },
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Container maxWidth="lg" sx={{ zIndex: 1400 }}>
          <Box
            component="img"
            src={image}
            sx={{ width: "100%", height: "auto" }}
          />
          <IconButton
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 5,
              color: "#fff",
            }}
          >
            <CloseIcon sx={{ fontSize: "2.5rem", color: "#fff" }} />
          </IconButton>
        </Container>
      </Modal>
    </>
  );
};

export default PhotoModal;
