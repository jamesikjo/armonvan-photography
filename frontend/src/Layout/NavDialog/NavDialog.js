import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, IconButton, Button, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";

const NavDialog = ({ openNavDialog, handleClose, pages }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Dialog
        fullScreen
        open={openNavDialog}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            justifyContent: "center",
            bgcolor: "#F7F9FC",
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
        {/* <NavLinks open={open} handleClose={handleClose} /> */}
        {pages.map(({ title, path }, i) => (
          <Link href={path} passHref key={i}>
            <Button
              component="a"
              color="primary"
              disableRipple
              onClick={handleClose}
              sx={{
                fontWeight: router.pathname === path && "bold",
                "&:hover": {
                  backgroundColor: "transparent",
                  fontWeight: "bold",
                },
              }}
            >
              {title}
            </Button>
          </Link>
        ))}
        <IconButton
          color="secondary"
          aria-label="instagram"
          href="https://www.instagram.com/lurking.glass/"
          target="_blank"
          onClick={handleClose}
          disableRipple
          sx={{
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "transparent",
            },
          }}
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Dialog>
    </>
  );
};

export default NavDialog;
