import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface ButtonProps {
  handleBackBtn: () => void;
}

const BackButton = ({ handleBackBtn }: ButtonProps) => {
  return (
    <>
      <IconButton
        aria-label="left-arrow"
        onClick={handleBackBtn}
        sx={{
          height: 1,
          p: 0,
          position: "absolute",
          left: { xs: 0, sm: "5%", xl: "10%" },
          top: "50%",
          transform: "translate(0%, -50%)",
          zIndex: 3,
        }}
      >
        <NavigateBeforeIcon
          color="warning"
          sx={{
            fontSize: { xs: "3.5rem", lg: "5rem" },
          }}
        />
      </IconButton>
    </>
  );
};

export default BackButton;
