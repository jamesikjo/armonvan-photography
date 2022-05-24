import React from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DialogNav = ({ open, handleClose, children }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          justifyContent: "center",
        },
      }}
    >
      <IconButton
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        sx={{ position: "absolute", top: 0, padding: "1.5rem" }}
      >
        <CloseIcon color="secondary" />
      </IconButton>
      {children}
    </Dialog>
  );
};

export default DialogNav;
