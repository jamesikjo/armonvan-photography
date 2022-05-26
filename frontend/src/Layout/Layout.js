import React, { useState } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import TopBar from "./TopBar";
import NavDialog from "./NavDialog";
import Footer from "./Footer";

const pages = [
  { title: "home", path: "/" },
  { title: "work", path: "/work" },
  { title: "contact", path: "/contact" },
  {
    title: "upload",
    path: "https://armonvan-photo.herokuapp.com/admin",
  },
];

const Layout = ({ children, title }) => {
  const [openNavDialog, setOpenNavDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenNavDialog(true);
  };

  const handleClose = () => {
    setOpenNavDialog(false);
  };

  return (
    <>
      <Head>
        <title>ArmonVan Photography | {title}</title>
      </Head>
      {/* navigation dialog menu for mobile view */}
      <NavDialog
        openNavDialog={openNavDialog}
        handleClose={handleClose}
        pages={pages}
      />
      <TopBar
        pages={pages}
        openNavDialog={openNavDialog}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />

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
    </>
  );
};

export default Layout;
