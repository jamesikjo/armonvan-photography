import Image from "next/image";
import { Modal, Backdrop } from "@mui/material";
import { getStrapiMedia } from "../../../lib/media";

const PhotoModal = ({ image, title, open, handleModalClose }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <>
      <Modal
        aria-labelledby={`transition-modal-${title}`}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: { backgroundColor: "#060809", opacity: 0.9 },
        }}
      >
        <Image
          onClick={handleModalClose}
          src={getStrapiMedia(image)}
          alt={alternativeText}
          width={width}
          height={height}
        />
      </Modal>
    </>
  );
};

export default PhotoModal;
