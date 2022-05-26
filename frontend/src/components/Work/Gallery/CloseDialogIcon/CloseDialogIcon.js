import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CloseDialogIcon = ({ handleClose }) => {
  return (
    <>
      <IconButton
        color="secondary"
        onClick={handleClose}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 10,
          margin: "1rem",
          fontSize: "1rem",
        }}
      >
        <CloseIcon sx={{ fontSize: "3em" }} />
      </IconButton>
    </>
  );
};

export default CloseDialogIcon;
