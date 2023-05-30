import React, { useState, useRef } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
  const [imageLoad, setImageLoad] = useState(true);
  const router = useRouter();

  const len = photoList.length;
  const currentPhoto = photoList[selectedIdx].image;

  const thumbnailWrapperRef = useRef<HTMLDivElement>(null!);

  const thumbnailClientWidth: number =
    thumbnailWrapperRef?.current?.clientWidth;

  const thumbnailScrollWidth: number =
    thumbnailWrapperRef?.current?.scrollWidth;

  const handleBtnClick = (step: number) => {
    let idx = selectedIdx;
    idx += step;

    if (idx < 0) {
      setSelectedIdx(len - (Math.abs(idx) % len));
    } else {
      setSelectedIdx((idx %= len));
    }
  };

  const handleForwardBtn = () => {
    handleBtnClick(1);
    if (thumbnailClientWidth >= thumbnailScrollWidth) return;
    if (selectedIdx === len - 1) {
      //going foward from last thumbnail position will
      //scroll thumbnails back to starting point
      thumbnailWrapperRef.current.scrollLeft &&= 0;
      return;
    }
    const { offsetRight } = calculateThumbnailOffset(
      thumbnailWrapperRef,
      selectedIdx + 1 //grab upcoming thumbnail
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
      handleBtnClick(-1);
      return;
    } else handleBtnClick(-1);

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
        mb={{ xs: 1, sm: 5 }}
        sx={{
          minHeight: { xs: 360, sm: 560, lg: 666 },
          minWidth: 1,
        }}
      >
        <Box width={1} height={1} position="relative">
          {/* render current/selected image */}
          {/* display loading indicator while <NextImage> is loading */}
          {!imageLoad ? (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "50%",
                transform: "translate(50%, -50%)",
              }}
            >
              <CircularProgress size={35} color="warning" />
            </Box>
          ) : null}
          <NextImage
            src={getStrapiMedia(currentPhoto)}
            layout="fill"
            objectFit="contain"
            quality={100}
            onLoadingComplete={() => setImageLoad(false)}
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
            {`by AV`}
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
        onClick={() => router.back()}
        sx={{
          position: "absolute",
          top: "2%",
          right: "4%",
        }}
      >
        <CloseIcon sx={{ fontSize: "1.6em", color: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default ImageGallery;
