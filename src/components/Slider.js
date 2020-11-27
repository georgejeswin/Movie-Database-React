import React, { useState } from "react";
import slide1 from "./images/slide1.jpeg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  // CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: slide1,
    altText: "Slide 4",
    caption: "",
    key: "1",
  },
  {
    src: slide2,
    altText: "Slide 2",
    caption: "",
    key: "2",
  },
  {
    src: slide3,
    altText: "Slide 3",
    caption: "",
    key: "3",
  },
  {
    src: slide4,
    altText: "Slide 4",
    caption: "",
    key: "4",
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-img" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {/* <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      /> */}
      {slides}
      <CarouselControl
        // direction="prev"
        // directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        // direction="next"
        // directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
