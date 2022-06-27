//calculate both left and right offset value of selected thumbnail's position
//leftside = start of screen to start of selected thumbnail
//rightside = end of screen to start of selected thumbnail

const calculateThumbnailOffset = (thumbnailRef, thumbnailIdx) => {
  const offsetLeft =
    thumbnailRef.current.children[thumbnailIdx].getBoundingClientRect().x;
  const offsetRight = thumbnailRef.current.clientWidth - offsetLeft;
  return { offsetLeft, offsetRight };
};

export default calculateThumbnailOffset;
