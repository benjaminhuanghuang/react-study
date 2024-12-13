import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import "./Carousel.css";

interface CarouselProps {
  items: { content: JSX.Element }[]; // Define item structure
  interval?: number; // Optional interval for automatic sliding
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 3000 }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const count = items.length;
  const carouselListRef = useRef<HTMLDivElement | null>(null);

  function generateSlides() {
    const slidesItems = [...items];
    // To implement the cyclic carouse,  clone the first and last elements
    // deep clone the first child and append it to the end of the list
    const firstClone = _.cloneDeep(slidesItems[0]);
    const lastClone = _.cloneDeep(slidesItems[items.length - 1]);
    slidesItems.push(firstClone);
    slidesItems.unshift(lastClone);

    const slides = slidesItems.map((item, i) => (
      // marginLeft: -100% push the first slide, which is the clone of last,  out of the view
      <div
        key={i}
        className="flex-shrink-0 w-full"
        style={i === 0 ? { marginLeft: "-100%" } : {}}
      >
        {item.content}
      </div>
    ));

    return slides;
  }

  function generateIndicatorButtons() {
    const indicatorButtons = [];
    for (let i = 0; i < items.length; i++) {
      indicatorButtons.push(
        <span
          key={i}
          className={i === currIndex ? "active" : ""}
          onClick={() => moveTo(i)}
        ></span>
      );
    }
    return indicatorButtons;
  }

  function moveTo(index: number) {
    const carouselList = carouselListRef.current as HTMLElement;
    carouselList.style.transform = `translateX(-${index * 100}%)`;
    // when the transform property of the element changes, the change should happen over 0.5 seconds
    carouselList.style.transition = "transform 0.5s";
    // set index
    setCurrIndex(index);
  }

  // Automatically change the slide every interval
  useEffect(() => {
    const timer = setInterval(() => {
      // nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currIndex === 0) {
      /*
        when the first slide is reached,  
        remove the transition effect, jump the the clone of the first slide real quick
        then jump to the real last slide
      */
      const carouselList = carouselListRef.current as HTMLElement;
      carouselList.style.transition = "none";
      // move the view port to clone of first element at the end of the list
      carouselList.style.transform = `translateX(-${count * 100}%)`;
      // force browse reflow, refresh the page.
      // without this line, the transition = "none"; effect will not work
      carouselList.offsetHeight;
      moveTo(count - 1);
    } else {
      moveTo(currIndex - 1);
    }
  };

  // Function to go to the next slide
  const nextSlide = () => {
    if (currIndex === count - 1) {
      /*
        when the last slide is reached,
        remove the transition effect, jump the the clone of the last slide real quick
        then jump to the real first slide
      */
      const carouselList = carouselListRef.current as HTMLElement;
      carouselList.style.transition = "none";
      carouselList.style.transform = `translateX(100%)`;
      carouselList.offsetHeight;
      moveTo(0);
    } else {
      moveTo(currIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-list" ref={carouselListRef}>
        {generateSlides()}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={prevSlide}
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        &#10095; {/* Right arrow */}
      </button>
      <div className="indictor">{generateIndicatorButtons()}</div>
    </div>
  );
};

export default Carousel;