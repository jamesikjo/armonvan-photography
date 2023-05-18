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
        aria-labelledby={`transition-modal-shows`}
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
            position: "relative",
            width: "auto",
            maxWidth: { lg: "100%" },
          }}
        >
          <NextImage src={image} width={999} height={666} />
          <IconButton
            onClick={handleModalClose}
            sx={{ position: "absolute", top: "2%", right: "2%", color: "#fff" }}
          >
            <CloseIcon sx={{ fontSize: "2.5rem", color: "#fff" }} />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default PhotoModal;
