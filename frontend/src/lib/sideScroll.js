//For navigating work photo gallery thumbnails
const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  console.log(element.scrollLeft);
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default sideScroll;
