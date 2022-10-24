import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface ButtonProps {
  handleForwardBtn: () => void;
}

const ForwardButton = ({ handleForwardBtn }: ButtonProps) => {
  return (
    <>
      <IconButton
        aria-label="right-arrow"
        onClick={handleForwardBtn}
        sx={{
          height: 1,
          p: 0,
          position: "absolute",
          right: { xs: 0, sm: "5%", xl: "10%" },
          top: "50%",
          transform: "translate(0%, -50%)",
          zIndex: 3,
        }}
      >
        <NavigateNextIcon
          color="warning"
          sx={{
            fontSize: { xs: "3.5rem", lg: "5rem" },
          }}
        />
      </IconButton>
    </>
  );
};

export default ForwardButton;
