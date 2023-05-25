import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, AppBar, useScrollTrigger, Divider } from "@mui/material";
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

const META = {
  title: "AV Photography",
  description: "Armon Van - Photographer",
  image: "/images/main-icon.png",
  type: "website",
};

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  colorInvert?: boolean;
}

const Layout = ({ children, title, colorInvert = false }: LayoutProps) => {
  const [openNavDialog, setOpenNavDialog] = useState<boolean>(false);
  const router = useRouter();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const handleClickOpen = () => {
    setOpenNavDialog(true);
  };

  const handleClose = () => {
    setOpenNavDialog(false);
  };

  return (
    <>
      <Head>
        <title>{title || META.title}</title>
        <meta name="description" content={META.description} />
        <link
          rel="canonical"
          href={`https://armonvanphoto.com${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`https://armonvanphoto.com${router.asPath}`}
        />
        <meta property="og:title" content={title || META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:site_name" content="AV Photography" />
        <meta property="og:type" content={META.type} />
        <meta property="og:image" content={META.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://armonvanphoto.com${router.asPath}`}
        />
        <meta property="twitter:title" content={title || META.title} />
        <meta property="twitter:description" content={META.description} />
        <meta property="twitter:image" content={META.image} />
      </Head>

      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar
          // position="sticky"
          sx={{
            transition: "background-color 0.7s, box-shadow 0.7s",
            boxShadow: trigger ? "0px 1px 5px -1px rgba(0, 0, 0, 0.2)" : "none",
            bgcolor: trigger ? "#F7F9FC" : "transparent",
          }}
        >
          <TopBar
            pages={PAGES}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            colorInvert={trigger ? false : colorInvert}
          />
        </AppBar>

        {/* navigation dialog menu for mobile view */}
        <NavDialog
          openNavDialog={openNavDialog}
          handleClose={handleClose}
          pages={PAGES}
        />

        <Box
          component="main"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
