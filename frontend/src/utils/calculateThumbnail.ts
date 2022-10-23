//calculate both left and right offset value of selected thumbnail's position
//leftside = start of screen to start of selected thumbnail
//rightside = end of screen to start of selected thumbnail

export const calculateThumbnailOffset = (
  thumbnailRef: React.MutableRefObject<HTMLDivElement>,
  thumbnailIdx: number
) => {
  const offsetLeft =
    thumbnailRef.current.children[thumbnailIdx].getBoundingClientRect().x;
  const offsetRight = thumbnailRef.current.clientWidth - offsetLeft;
  return { offsetLeft, offsetRight };
};

//calculate the amount needed to scroll selected thumbnail into center

export const calculateThumbnailScroll = (
  thumbnailRef: React.MutableRefObject<HTMLDivElement>,
  thumbnailOffset: number
) => {
  const centerOfThumbnailWrapper = thumbnailRef.current.clientWidth / 2;
  const distanceToCenter = centerOfThumbnailWrapper - thumbnailOffset;
  return distanceToCenter;
};
