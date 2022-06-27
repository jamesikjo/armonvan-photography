import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const BackButton = ({ handleBackBtn }) => {
  return (
    <>
      <IconButton
        aria-label="left-arrow"
        onClick={handleBackBtn}
        sx={{
          position: "absolute",
          left: { xs: 0, lg: "10%", xl: "15%" },
          zIndex: 3,
          p: 0,
        }}
      >
        <NavigateBeforeIcon
          sx={{
            fontSize: { xs: "3.5rem", lg: "5rem", xl: "7rem" },
            color: "#f7a047",
          }}
        />
      </IconButton>
    </>
  );
};

export default BackButton;
