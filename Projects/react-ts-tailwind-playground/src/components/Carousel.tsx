/*
https://www.bilibili.com/video/BV1gz1jYnEND/?spm_id_from=333.999.0.0

DOM structure:
    carousel-container
        carousel-list
            carousel-item 1
            carousel-item 2
            carousel-item 3
        carousel-arrow-left
        carousel-arrow-right
        indicator
            span
        
Implementation:
carousel-container: overflow = hidden

Use the transform:translateX(-100%)


1. goTo(index)
2. left
3. right

Tricky part for cycle carousel:
[3][1][2][3][1]

*/

import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

interface CarouselItemProps {
  id: number;
  image: string;
  title?: string;
  information?: string;
}
interface CarouselProps {
  items: CarouselItemProps[]; // Define item structure
  interval?: number; // Optional interval for automatic sliding
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  interval = 3000,
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const count = items.length;
  const carouselListRef = useRef<HTMLDivElement | null>(null);

  function generateSlides() {
    // To implement the cyclic carousel, clone the first and last elements
    const slidesItems = [items.at(-1), ...items, items[0]];
    return slidesItems.map((item, i) => (
      // marginLeft: -100% push the first slide, which is the clone of last,  out of the view
      <div
        key={i}
        style={{
          backgroundImage: `url(${item!.image})`,
          marginLeft: i === 0 ? '-100%' : '0',
        }}
        className='bg-center bg-cover h-96 flex-shrink-0 w-full'
      ></div>
    ));
  }

  function goTo(index: number) {
    const carouselList = carouselListRef.current as HTMLElement;
    carouselList.style.transform = `translateX(-${index * 100}%)`;
    // when the transform property of the element changes, the change should happen over 0.5 seconds
    // carouselList.style.transition = 'transform 0.5s';
    // set index
    setCurrIndex(index);
  }

  // Automatically change the slide every interval
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currIndex === 0) {
      /*
        cycle carousel
        when the first slide is reached,  
        remove the transition effect, jump the the clone of the first slide real quick
        then jump to the real last slide
      */
      const carouselList = carouselListRef.current as HTMLElement;
      carouselList.style.transition = 'none';
      // move the view port to clone of first element at the end of the list
      carouselList.style.transform = `translateX(-${count * 100}%)`;
      // force browse reflow, refresh the page.
      // without this line, the transition = "none"; effect will not work
      //carouselList.offsetHeight;
      goTo(count - 1);
    } else {
      goTo(currIndex - 1);
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
      // carouselList.style.transition = 'none';
      carouselList.style.transform = `translateX(100%)`;
      //carouselList.offsetHeight;
      goTo(0);
    } else {
      goTo(currIndex + 1);
    }
  };

  return (
    <div id="carousel-container" className='relative w-[700px] height-[300px] overflow-hidden ml-auto mr-auto'>
      <div
        id='carousel-list'
        ref={carouselListRef}
        className='w-full h-full flex relative -z-1  transform transition-transform duration-[3000ms] hover:scale-110'
        >
        {generateSlides()}
      </div>

      {/* Navigation buttons */}
      <button
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2'
        onClick={prevSlide}
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2'
        onClick={nextSlide}
      >
        &#10095; {/* Right arrow */}
      </button>
      <div
        className='flex w-full justify-center items-center gap-3 z-10 absolute bottom-2'
        style={{ border: '10px' }}
      >
        {items.map((item, i) => (
          <span
            key={item.id}
            onClick={() => goTo(i)}
            className={`w-[10px] h-[10px] rounded-full cursor-pointer hover:bg-[#555] ${i === currIndex ? 'bg-[#333] transform scale-[1.3]' : 'bg-[#ccc]'}`}
          >
            {i === currIndex}
          </span>
        ))}
      </div>
    </div>
  );
};
