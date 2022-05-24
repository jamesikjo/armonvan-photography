import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, useTheme, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { pages } from "../utils/navigation";
import Footer from "./Footer";
import TopBar from "./TopBar";

export const NavLinks = ({ pages, handleClose }) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
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
    </>
  );
};

const Layout = ({ children, setHeight = "100vh" }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box minHeight={setHeight} display="flex" flexDirection="column">
      <TopBar
        open={open}
        pages={pages}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      >
        <NavLinks pages={pages} handleClose={handleClose} />
      </TopBar>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
      <Footer pages={pages} />
    </Box>
  );
};

export default Layout;
