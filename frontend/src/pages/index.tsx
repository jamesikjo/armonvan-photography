import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import NoSsr from "@mui/material/NoSsr";
import Layout from "../Layout";
import {
  Welcome,
  Landscapes,
  Sounds,
  Bio,
  WildLife,
  PhotoModal,
} from "../components/Home";

export type LandingSections = {
  toggleModal: () => void;
};

const homeSectionImages = {
  welcome:
    "https://res.cloudinary.com/jjo/image/upload/v1684429959/railroad-min_u1gauu.webp",
  landscapes:
    "https://res.cloudinary.com/jjo/image/upload/v1684430009/photo-1524024753536-2478712fa702_ibkpui.webp",
  sounds:
    "https://res.cloudinary.com/jjo/image/upload/v1684430063/photo-1582491612924-823805b0bbf2_kxr8rw.webp",
  wildlife:
    "https://res.cloudinary.com/jjo/image/upload/v1684430216/photo-1662110613939-fab519f24afc_n4r9pp.webp",
};

const Home = () => {
  const [modalState, setModalState] = useState({ open: false, image: "" });

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  }, []);

  const scrollTo = (id: string) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }
      const htmlElement = element as HTMLElement;
      window.scrollTo({
        left: 0,
        top: htmlElement.offsetTop,
        behavior: "smooth",
      });
    }, 75);
  };

  const toggleModal = (image: string) => {
    setModalState((prevState) => ({
      open: !prevState.open,
      image: prevState.open ? "" : image,
    }));
  };

  const styles = (bgImg: string) => ({
    position: "absolute",
    objectFit: "cover",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: -1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${bgImg})`,
    filter: "brightness(0.75)",
    backgroundColor: "#10100D",
  });

  return (
    <Layout colorInvert={true}>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        bgcolor="rgba(0, 0, 0, 0.45)"
      >
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box sx={styles(homeSectionImages.welcome)} />
            <Welcome />
            <Box>
              <NoSsr>
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  width={{ xs: 30, sm: 35 }}
                  height={{ xs: 30, sm: 35 }}
                  onClick={() => scrollTo("portfolio-item--js-scroll")}
                  sx={{ cursor: "pointer" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className="jarallax"
        data-jarallax
        data-speed="0.2"
        position="relative"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        bgcolor="#0A0A08"
        id="portfolio-item--js-scroll"
      >
        <Box
          className="jarallax-img"
          sx={styles(homeSectionImages.landscapes)}
        />
        <Container maxWidth="lg">
          <Landscapes
            toggleModal={() => toggleModal(homeSectionImages.landscapes)}
          />
        </Container>
      </Box>
      <Box
        className="jarallax"
        data-jarallax
        data-speed="0.2"
        position="relative"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        bgcolor="#0A0A08"
      >
        <Box className="jarallax-img" sx={styles(homeSectionImages.sounds)} />
        <Container maxWidth="lg">
          <Sounds toggleModal={() => toggleModal(homeSectionImages.sounds)} />
        </Container>
      </Box>
      <Box minHeight="100vh" display="flex" alignItems="center">
        <Container>
          <Bio />
        </Container>
      </Box>
      <Box
        className="jarallax"
        data-jarallax
        data-speed="0.5"
        position="relative"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        bgcolor="#0A0A08"
      >
        <Box className="jarallax-img" sx={styles(homeSectionImages.wildlife)} />
        <Container maxWidth="lg">
          <WildLife
            toggleModal={() => toggleModal(homeSectionImages.wildlife)}
          />
        </Container>
      </Box>
      <PhotoModal
        image={modalState.image}
        open={modalState.open}
        handleModalClose={() => toggleModal("")}
      />
    </Layout>
  );
};

export default Home;
