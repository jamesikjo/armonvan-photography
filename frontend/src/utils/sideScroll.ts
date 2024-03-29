//speed = miliseconds until setInterval is called again
//distance = amount of px to scroll
//step =
//if element can't be scrolled, then scrollLeft = 0

interface SideScroll {
  (element: any, speed: number, distance: number, step: number): void;
}

const sideScroll: SideScroll = (element, speed, distance, step) => {
  //element = thumbnail wrapper ref
  let scrollAmount = 0;

  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount > distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default sideScroll;
