import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselHeader from "./CarouselHeader";
import vite from "../img/vite.svg";
import data from "../../data.json";
import {formatTemp} from "../utils.js";

export default function Carousel({items}) {
  const responsive = {
    0: {items: 1},
    100: {items: 2},
    200: {items: 3},
  };

  const customItems = data.list.map((item, index) => (
    <div className="cardItem shadow-sm rounded-md" data-value="1">
      <p className="">{item.dt_txt.split(" ")[1]}</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">{formatTemp(item.main.feels_like)}°</div>
    </div>
    ));
  /*const items = [
    <div
      className="cardItem shadow-sm rounded-md"
      data-value="1"
      //   style={{backgroundColor: this.state.bgColor}}
      //   onClick={this.boxClick}
    >
      <p className="">00:00</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">25°</div>
    </div>,
    <div className="cardItem shadow-sm rounded-md" data-value="1">
      <p className="">00:00</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">25°</div>
    </div>,
    <div className="cardItem shadow-sm rounded-md" data-value="1">
      <p className="">00:00</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">25°</div>
    </div>,
    <div className="cardItem shadow-sm rounded-md" data-value="1">
      <p className="">00:00</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">25°</div>
    </div>,
    <div className="cardItem shadow-sm rounded-md" data-value="1">
      <p className="">00:00</p>
      <img src={vite} alt="vite" className="" />
      <div className="font-bold">25°</div>
    </div>,
  ];*/

  return (
    <div className="w-full pb-4 px-4">
      <CarouselHeader></CarouselHeader>
      <AliceCarousel
        responsive={responsive}
        items={customItems}
        autoPlayInterval={3000}
        disableButtonsControls
        disableDotsControls
        mouseDragEnabled
        touchTrackingEnabled
        fadeOutAnimation
        paddingLeft={10}
        paddingRight={140}
        itemPosition="center"
        disableSlideInfo
        sho
      />
    </div>
  );
}
