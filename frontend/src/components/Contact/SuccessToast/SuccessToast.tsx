import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SuccessToastProps {
  open: boolean;
  handleCloseToast: () => void;
}
const SuccessToast = ({ open, handleCloseToast }: SuccessToastProps) => {
  return (
    <div>
      <Collapse in={open}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseToast}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Success</AlertTitle>
          Message Sent!
        </Alert>
      </Collapse>
    </div>
  );
};

export default SuccessToast;
