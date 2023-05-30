import React from "react";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import NoSsr from "@mui/material/NoSsr";
import Layout from "../Layout";
import { Welcome, Bio, PhotoModal, CategoryBg } from "../components/Home";
import { LandingAbout, LandingPhoto } from "../types/strapi/Landing";
import { fetchData } from "../lib/fetchData";
import { getStrapiMedia } from "../lib/getStrapiMedia";

interface APICall {
  landingPhotos: LandingPhoto[];
  aboutData: LandingAbout;
}

const Home = ({ landingPhotos, aboutData }: APICall) => {
  const [modalState, setModalState] = useState({ open: false, image: "" });

  const welcomeHeroData = landingPhotos[0]; //grab background img for hero(Welcome) section only

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
    filter: "brightness(0.9)",
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
            <Box sx={styles(getStrapiMedia(welcomeHeroData.image))} />
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
      {landingPhotos.slice(1).map((item, index) => (
        <React.Fragment key={item.id}>
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
              sx={styles(getStrapiMedia(item.image))}
            />
            <Container maxWidth="lg">
              <CategoryBg
                title={item.title}
                toggleModal={() => toggleModal(getStrapiMedia(item.image))}
              />
            </Container>
          </Box>
          {index === 1 && (
            <Box minHeight="100vh" display="flex" alignItems="center">
              <Container>
                <Bio aboutData={aboutData} />
              </Container>
            </Box>
          )}
        </React.Fragment>
      ))}
      <PhotoModal
        image={modalState.image}
        open={modalState.open}
        handleModalClose={() => toggleModal("")}
      />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const landingPhotosRes = await fetchData("/landing", {
    populate: {
      photos: {
        // Populate all relations in level-photos
        populate: "*",
      },
    },
  });
  const aboutRes = await fetchData("/about", {
    populate: "image",
  });

  const landingPhotos = landingPhotosRes.data.attributes.photos;
  const aboutData = aboutRes.data.attributes;
  return {
    props: {
      landingPhotos,
      aboutData,
    },
    revalidate: 30,
  };
};
