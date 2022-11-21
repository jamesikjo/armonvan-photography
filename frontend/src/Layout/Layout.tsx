import React, { useState } from "react";
import { useRouter } from "next/router";
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
    path: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/admin",
  },
];

const meta = {
  title: "ArmonVan Photography",
  description: "ArmonVan Photography - Portfolio",
  image: "/images/armonvan-footer-logo.png",
  type: "website",
};

interface LayoutProps {
  children: JSX.Element;
  title?: string;
  description?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const [openNavDialog, setOpenNavDialog] = useState<boolean>(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpenNavDialog(true);
  };

  const handleClose = () => {
    setOpenNavDialog(false);
  };

  return (
    <>
      <Head>
        <title>{title || meta.title}</title>
        <meta name="description" content={meta.description} />
        <link
          rel="canonical"
          href={`https://armonvanphoto.com${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`https://armonvanphoto.com${router.asPath}`}
        />
        <meta property="og:title" content={title || meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="ArmonVan Photography" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://armonvanphoto.com${router.asPath}`}
        />
        <meta property="twitter:title" content={title || meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
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
