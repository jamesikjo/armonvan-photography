import React from "react";
import Link from "next/link";
import { Container, IconButton, Toolbar, Box, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DialogNav from "./DialogNav";

const TopBar = ({ open, pages, handleClickOpen, handleClose, children }) => {
  return (
    <Container maxWidth="lg" component="nav">
      <Toolbar
        sx={{
          lineHeight: 0,
        }}
        disableGutters
      >
        <Box display="flex" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Box component="a" title="Armon Van Photography">
              <Box
                component="img"
                src="/images/nav-logo.svg"
                sx={{ width: 300 }}
              />
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>{children}</Box>

        {/*open nav menu dialog on small to medium screensizes */}

        <IconButton
          aria-label="menu"
          onClick={handleClickOpen}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Divider sx={{ mb: 3 }} />

      <DialogNav pages={pages} handleClose={handleClose} open={open}>
        {children}
      </DialogNav>
    </Container>
  );
};

export default TopBar;
