import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, IconButton, useTheme, Typography, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import { Page } from "../../types/strapi/Shared";

interface NavDialogProps {
  openNavDialog: boolean;
  handleClose: () => void;
  pages: Page[];
}

const NavDialog = ({ openNavDialog, handleClose, pages }: NavDialogProps) => {
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
        <Stack alignItems="center" spacing={1}>
          {pages.map(({ title, path }, i) => (
            <Link href={path} passHref key={i}>
              <Typography
                component="a"
                color="primary"
                onClick={handleClose}
                sx={{
                  ...(router.pathname === path && { fontWeight: "bold" }),
                  "&:hover": {
                    backgroundColor: "transparent",
                    fontWeight: "bold",
                  },
                }}
              >
                {title}
              </Typography>
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
        </Stack>
      </Dialog>
    </>
  );
};

export default NavDialog;
