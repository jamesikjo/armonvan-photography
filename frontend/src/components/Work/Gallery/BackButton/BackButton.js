import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const BackButton = ({ handlePrevPhoto }) => {
  return (
    <>
      <IconButton
        aria-label="left-arrow"
        onClick={handlePrevPhoto}
        sx={{
          width: "15%",
          // height: "15%",
          position: "absolute",
          left: 0,
          zIndex: 3,
        }}
      >
        <NavigateBeforeIcon sx={{ fontSize: "5rem", color: "#fff" }} />
      </IconButton>
    </>
  );
};

export default BackButton;
