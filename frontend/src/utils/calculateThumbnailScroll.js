//calculate the amount needed to scroll selected thumbnail into center

const calculateThumbnailScroll = (thumbnailRef, thumbnailOffset) => {
  const centerOfThumbnailWrapper = thumbnailRef.current.clientWidth / 2;
  const distanceToCenter = centerOfThumbnailWrapper - thumbnailOffset;
  console.log(distanceToCenter);
  return distanceToCenter;
};

export default calculateThumbnailScroll;
