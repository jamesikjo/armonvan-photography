import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ForwardButton = ({ handleNextPhoto }) => {
  return (
    <>
      <IconButton
        aria-label="right-arrow"
        onClick={handleNextPhoto}
        sx={{
          width: "15%",
          // height: "15%",
          position: "absolute",
          right: 0,
          zIndex: 3,
        }}
      >
        <NavigateNextIcon sx={{ fontSize: "5rem", color: "#fff" }} />
      </IconButton>
    </>
  );
};

export default ForwardButton;
