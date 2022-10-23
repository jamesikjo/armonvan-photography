import React, { useState, useRef } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { Box, Container, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import sideScroll from "../../../utils/sideScroll";
import {
  calculateThumbnailOffset,
  calculateThumbnailScroll,
} from "../../../utils/calculateThumbnail";
import {
  ENGAGE_SCROLL_VALUE,
  THUMBNAIL_SIZE_TOTAL,
} from "../../../utils/consts";
import Thumbnails from "./Thumbnails";
import { getStrapiMedia } from "../../../lib/getStrapiMedia";
import { CollectionImage } from "../../../types/strapi/Category";

interface ImageGalleryProps {
  photoList: CollectionImage[];
}

const ImageGallery = ({ photoList }: ImageGalleryProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const router = useRouter();

  const thumbnailWrapperRef = useRef<HTMLDivElement>(null!);

  const thumbnailClientWidth: number =
    thumbnailWrapperRef?.current?.clientWidth;
  const thumbnailScrollWidth: number =
    thumbnailWrapperRef?.current?.scrollWidth;

  const currentPhoto = photoList[selectedIdx].image;
  const len = photoList.length;

  const handleForwardBtn = () => {
    setSelectedIdx((selectedIdx + 1) % len);
    if (thumbnailClientWidth >= thumbnailScrollWidth) return;

    if (selectedIdx === len - 1) {
      //forward button at the last thumbnail will
      //scroll thumbnails back to starting image
      thumbnailWrapperRef.current.scrollLeft &&= 0;
      return;
    }
    const { offsetRight } = calculateThumbnailOffset(
      thumbnailWrapperRef,
      selectedIdx + 1 //get next thumbnail before selectedIdx state is updated
    );
    //engage scrolling to the right only when
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
    const { offsetLeft } = calculateThumbnailOffset(
      thumbnailWrapperRef,
      selectedIdx
    );

    if (selectedIdx === 0) {
      //show the last photo when user clicks backbutton from the starting point (selectedIdx = 0)
      //scroll thumbnails to view the last image
      thumbnailWrapperRef.current.scrollLeft = THUMBNAIL_SIZE_TOTAL * len;
      setSelectedIdx(len - 1);
      return;
    } else {
      setSelectedIdx(selectedIdx - 1);
    }

    if (offsetLeft < ENGAGE_SCROLL_VALUE) {
      const distanceToCenter = calculateThumbnailScroll(
        thumbnailWrapperRef,
        offsetLeft
      );
      sideScroll(thumbnailWrapperRef.current, 5, distanceToCenter, -5);
    }
  };

  return (
    <Box
      height={1}
      width={1}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ overflowY: "auto" }}
    >
      <Box
        pb={5}
        sx={{
          minHeight: { xs: 350, md: 500, lg: 666 },
          minWidth: { xs: 1, sm: 1, md: 600, lg: 800 },
        }}
      >
        <Box width={1} height={1} position="relative">
          {/* render current/selected image */}
          <NextImage
            src={getStrapiMedia(currentPhoto)}
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
            // width={currentPhoto.data.attributes.width}
            // height={currentPhoto.data.attributes.height}
          />
          <ForwardButton handleForwardBtn={handleForwardBtn} />
          <BackButton handleBackBtn={handleBackBtn} />
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Box mb={1}>
          <Typography
            variant="h6"
            color="common.white"
            sx={{ lineHeight: "1.15" }}
          >
            {photoList[selectedIdx].title}
          </Typography>
          <Typography color="secondary" variant="body1">
            {`by ${photoList[selectedIdx].photographer}`}
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
