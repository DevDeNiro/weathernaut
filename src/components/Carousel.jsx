import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import vite from "/public/vite.svg";

export default function Carousel() {
  const responsive = {
    0: {items: 1},
    100: {items: 2},
    200: {items: 3},
  };

  const items = [
    <div className="cardItem shadow-sm rounded-md" data-value="1">
      <p className="">00:00</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">25°</div>
    </div>,
  ];

  return (
    <div className="">
      <AliceCarousel
        responsive={responsive}
        items={items}
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
        mouseDragEnabled
        touchTrackingEnabled
        fadeOutAnimation
        paddingLeft={10}
        paddingRight={140}
        itemPosition="center"
        disableSlideInfo
      />
    </div>
  );
}
