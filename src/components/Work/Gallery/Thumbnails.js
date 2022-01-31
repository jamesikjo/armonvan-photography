import React, { useState } from "react";
import Image from "next/image";
import { Box, Stack } from "@mui/material/";
import sideScroll from "./../../../utils/sideScroll";
import { getStrapiMedia } from "./../../../utils/media";

const Thumbnails = ({ photos, setPhotoIdx, photoIdx, forwardedRef }) => {
  const [clickPosition, setClickPosition] = useState(0);

  const handleThumbNailClick = (idx) => {
    if (idx > 1 && idx >= clickPosition) {
      sideScroll(forwardedRef.current, 25, 80, 10);
      setClickPosition(idx);
    } else {
      sideScroll(forwardedRef.current, 20, 80, -10);
      setClickPosition(idx);
    }
    setPhotoIdx(idx);
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        ref={forwardedRef}
        sx={{ overflow: "hidden" }}
      >
        {photos.map(({ attributes }, idx) => {
          const currentThumbnail = idx === photoIdx;

          return (
            <Box
              key={idx}
              sx={{
                height: 55,
                width: 55,
                flexShrink: 0,
                filter: currentThumbnail && "brightness(1.5)",
                opacity: currentThumbnail ? 1 : 0.2,
                "&:hover": { opacity: 1, filter: "brightness(1.5)" },
              }}
              onClick={() => handleThumbNailClick(idx)}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden", //need overflow="hidden" to set borderRadius
                  height: 1,
                  width: 1,
                  position: "relative",
                }}
              >
                <Image
                  src={getStrapiMedia(attributes.image)}
                  alt={attributes.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Thumbnails;
