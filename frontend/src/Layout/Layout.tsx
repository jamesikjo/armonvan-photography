import React, { useState } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import TopBar from "./TopBar";
import NavDialog from "./NavDialog";
import Footer from "./Footer";

const PAGES = [
  { title: "Home", path: "/" },
  { title: "Work", path: "/work" },
  { title: "Contact", path: "/contact" },
  {
    title: "Upload",
    path: "https://armonvan-photo.herokuapp.com/admin",
  },
];

interface LayoutProps {
  children: JSX.Element;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const [openNavDialog, setOpenNavDialog] = useState<boolean>(false);

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
        pages={PAGES}
      />
      <TopBar
        pages={PAGES}
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
      <Footer pages={PAGES} />
    </>
  );
};

export default Layout;
