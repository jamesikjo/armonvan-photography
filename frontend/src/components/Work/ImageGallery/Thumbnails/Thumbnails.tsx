import { Box, Stack } from "@mui/material/";
import sideScroll from "../../../../utils/sideScroll";
import {
  calculateThumbnailOffset,
  calculateThumbnailScroll,
} from "../../../../utils/calculateThumbnail";
import {
  THUMBNAIL_WIDTH,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_MARGIN,
  ENGAGE_SCROLL_VALUE,
} from "../../../../utils/consts";
import { CollectionImage } from "../../../../types/strapi/Category";

interface ThumbnailsProps {
  photoList: CollectionImage[];
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
  selectedIdx: number;
  thumbnailWrapperRef: React.MutableRefObject<HTMLDivElement>;
}

const Thumbnails = ({
  photoList,
  setSelectedIdx,
  selectedIdx,
  thumbnailWrapperRef,
}: ThumbnailsProps) => {
  const thumbnailClientWidth = thumbnailWrapperRef?.current?.clientWidth;
  const thumbnailScrollWidth = thumbnailWrapperRef?.current?.scrollWidth;

  const handleThumbNailClick = (idx: number) => {
    setSelectedIdx(idx);
    if (thumbnailClientWidth >= thumbnailScrollWidth) return;

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
        {photoList.map((photo, idx) => {
          return (
            <Box
              key={idx}
              height={THUMBNAIL_HEIGHT}
              width={THUMBNAIL_WIDTH}
              mr={`${THUMBNAIL_MARGIN}px`}
              sx={{
                flexShrink: 0,
                ...(idx === selectedIdx
                  ? {
                      filter: "brightness(1.25)",
                    }
                  : { opacity: 0.4 }),
                "&:hover": { opacity: 1, filter: "brightness(1.25)" },
              }}
              onClick={() => handleThumbNailClick(idx)}
            >
              <Box
                component="img"
                height={1}
                width={1}
                src={photo.image.data.attributes.url}
                alt={photo.title}
                sx={{
                  objectFit: "cover",
                  borderRadius: 2,
                  ...(idx === selectedIdx && {
                    border: "2.5px solid #f7a047",
                  }),
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
