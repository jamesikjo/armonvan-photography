import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ForwardButton = ({ handleForwardBtn }) => {
  return (
    <>
      <IconButton
        aria-label="right-arrow"
        onClick={handleForwardBtn}
        sx={{
          position: "absolute",
          right: { xs: 0, lg: "10%", xl: "15%" },
          zIndex: 3,
          p: 0,
        }}
      >
        <NavigateNextIcon
          sx={{
            fontSize: { xs: "3.5rem", lg: "5rem", xl: "7rem" },
            color: "#f7a047",
          }}
        />
      </IconButton>
    </>
  );
};

export default ForwardButton;
