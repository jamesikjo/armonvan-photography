import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Box, Container, IconButton, Typography } from "@mui/material";
import CurrentImage from "./CurrentImage";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import sideScroll from "../../../utils/sideScroll";
import calculateThumbnailOffSet from "../../../utils/calculateThumbnailOffset";
import calculateThumbnailScroll from "../../../utils/calculateThumbnailScroll";
import { ENGAGE_SCROLL_VALUE } from "../../../utils/consts";
import Thumbnails from "./Thumbnails";

const ImageGallery = ({ photoList }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const router = useRouter();

  const thumbnailWrapperRef = useRef(null);

  const thumbnailClientWidth = thumbnailWrapperRef?.current?.clientWidth;
  const thumbnailScrollWidth = thumbnailWrapperRef?.current?.scrollWidth;
  const len = photoList.length;

  const handleForwardBtn = () => {
    setSelectedIdx((selectedIdx + 1) % len);

    if (thumbnailClientWidth >= thumbnailScrollWidth) return;

    if (selectedIdx === len - 1) {
      //going forward from the last image will
      //shift thumbnails back to starting image
      thumbnailWrapperRef.current.scrollLeft = 0;
      return;
    }
    const { offsetRight } = calculateThumbnailOffSet(
      thumbnailWrapperRef,
      selectedIdx + 1 //adding one here to access thumbnailIdx before selectedIdx state is updated
    );
    //engage scrolling right only when
    //selected thumbnail's right offset value is less than ENGAGE_SCROLL_VALUE
    if (offsetRight < ENGAGE_SCROLL_VALUE) {
      const distanceToCenter = calculateThumbnailScroll(
        thumbnailWrapperRef,
        offsetRight
      );
      sideScroll(thumbnailWrapperRef.current, 5, distanceToCenter, 5);
    }
  };

  const handleBackBtn = () => {
    if (thumbnailClientWidth >= thumbnailScrollWidth) return;

    const { offsetLeft } = calculateThumbnailOffSet(
      thumbnailWrapperRef,
      selectedIdx
    );

    if (selectedIdx === 0) {
      //show images in reverse when user clicks backbutton from the starting point (selectedIdx = 0)
      //scroll thumbnails to view the last image
      setSelectedIdx(len - 1);
      thumbnailWrapperRef.current.scrollLeft = thumbnailScrollWidth;
      return;
    }

    if (selectedIdx > 0) {
      setSelectedIdx(selectedIdx - 1);
      if (offsetLeft < ENGAGE_SCROLL_VALUE) {
        const distanceToCenter = calculateThumbnailScroll(
          thumbnailWrapperRef,
          offsetLeft
        );
        sideScroll(thumbnailWrapperRef.current, 5, distanceToCenter, -5);
      }
    }
  };

  return (
    <Box
      height={1}
      width={1}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ overflowY: "auto" }}
    >
      <Box
        position="relative"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        mb={8}
      >
        <Box m={"0 auto"} maxHeight={666} position="relative">
          <CurrentImage photoList={photoList} selectedIdx={selectedIdx} />
        </Box>
        <BackButton handleBackBtn={handleBackBtn} />
        <ForwardButton handleForwardBtn={handleForwardBtn} />
      </Box>

      <Container maxWidth="lg">
        <Box mb={1}>
          <Typography
            variant="h6"
            color="common.white"
            sx={{ lineHeight: "1.15" }}
          >
            {photoList[selectedIdx].attributes.title}
          </Typography>
          <Typography color="secondary" variant="body1">
            by Ramon Garcia
          </Typography>
        </Box>
        <Thumbnails
          photoList={photoList}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
          thumbnailWrapperRef={thumbnailWrapperRef}
        />
      </Container>

      <IconButton
        onClick={() => router.push("/work")}
        sx={{
          position: "absolute",
          top: 15,
          left: 10,
        }}
      >
        <KeyboardBackspaceIcon sx={{ color: "#F5F5F5", fontSize: "2em" }} />
      </IconButton>
    </Box>
  );
};

export default ImageGallery;
