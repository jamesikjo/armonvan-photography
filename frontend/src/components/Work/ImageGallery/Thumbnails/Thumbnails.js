import { Box, Stack } from "@mui/material/";
import sideScroll from "../../../../utils/sideScroll";
import calculateThumbnailScroll from "../../../../utils/calculateThumbnailScroll";
import calculateThumbnailOffset from "../../../../utils/calculateThumbnailOffset";
import {
  THUMBNAIL_WIDTH,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_MARGIN,
  ENGAGE_SCROLL_VALUE,
} from "../../../../utils/consts";

const Thumbnails = ({
  photoList,
  setSelectedIdx,
  selectedIdx,
  thumbnailWrapperRef,
}) => {
  const thumbnailClientWidth = thumbnailWrapperRef?.current?.clientWidth;
  const thumbnailScrollWidth = thumbnailWrapperRef?.current?.scrollWidth;

  const handleThumbNailClick = (idx) => {
    setSelectedIdx(idx);
    if (thumbnailClientWidth >= thumbnailScrollWidth) {
      return;
    }
    const { offsetLeft, offsetRight } = calculateThumbnailOffset(
      thumbnailWrapperRef,
      idx
    );

    //engage thumbnail scrolling to either left or right based on offset value being less than ENGAGE_SCROLL_VALUE
    if (offsetRight < ENGAGE_SCROLL_VALUE) {
      const distanceToCenter = calculateThumbnailScroll(
        thumbnailWrapperRef,
        offsetRight
      );
      sideScroll(thumbnailWrapperRef.current, 5, distanceToCenter, 5);
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
    <>
      <Stack
        direction="row"
        ref={thumbnailWrapperRef}
        sx={{ overflow: "hidden", width: 1 }}
      >
        {photoList.map((data, idx) => {
          const getThumbnailUrl =
            data.attributes.image.data.attributes.formats.thumbnail.url;

          return (
            <Box
              key={idx}
              height={THUMBNAIL_HEIGHT}
              width={THUMBNAIL_WIDTH}
              mr={`${THUMBNAIL_MARGIN}px`}
              sx={{
                flexShrink: 0,
                filter: idx === selectedIdx && "brightness(1.25)",
                opacity: idx === selectedIdx ? 1 : 0.4,
                "&:hover": { opacity: 1, filter: "brightness(1.25)" },
              }}
              onClick={() => handleThumbNailClick(idx)}
            >
              <Box
                component="img"
                height={1}
                width={1}
                src={getThumbnailUrl}
                alt={data.attributes.title}
                sx={{
                  objectFit: "cover",
                  borderRadius: 2,
                  border: idx === selectedIdx && "2.5px solid #f7a047",
                }}
              />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Thumbnails;
