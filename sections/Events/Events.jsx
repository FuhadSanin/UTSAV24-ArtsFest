import React, { useState, useEffect, useRef } from 'react';
import "./Events.css";

function Events() {
  const list = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7', 'Element 8', 'Element 9', 'Element 10', 'Element 11', 'Element 12', 'Element 13', 'Element 14', 'Element 15', 'Element 16', 'Element 17', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 26', 'Element 56'];

  const ringRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [newList, setNewList] = useState(list.slice(0, 8));
  let i = 0;
  let j = 0;
  let intervalId = null;

  // const rotateCarousel = () => {
  //   const ring = ringRef.current;
  //   if (ring) {
  //     ring.style.transform = `rotate(${j++ * -45}deg)`;
  //     i++;
  //     if (i >= 8) {
  //       setNewList(prevList => {
  //         const updatedList = [...prevList];
  //         updatedList[(i - 8) % 8] = list[i];
  //         return updatedList;
  //       });
  //       setActiveSlide(j + 1);
  //     }
  //   }
  // };


  const rotateCarousel = () => {
    const ring = ringRef.current;
    if (ring) {
      ring.style.transform = `rotate(${j++ * -45}deg)`;
      i++;
      if (i >= list.length) {
        // Reset the counters once the list is fully traversed
        i = 0;
        j = 0;
      }
      setNewList(prevList => {
        const updatedList = [...prevList];
        updatedList[i % 8] = list[i % list.length]; // Use modulo to cycle through the list
        return updatedList;
      });
      setActiveSlide((j % list.length) + 1); // Update active slide index
    }
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    rotateCarousel();
    clearInterval(intervalId); // Reset the rotation interval timer
    intervalId = setTimeout(() => {
      intervalId = setInterval(rotateCarousel, 1500); // Resume rotation after 2 seconds of inactivity
    }, 2000);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("wheel", handleWheel);

    intervalId = setInterval(rotateCarousel, 800); // Start rotation interval

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='EventsSection'>
      <div className='carousel' ref={carouselRef} onWheel={handleWheel}>
        <div className='ring' ref={ringRef}>
          {newList.map((element, index) => (
            <div key={index} className={`slide${index + 1} ${activeSlide === index + 1 ? 'active' : ''}`}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

export default Events;



// useEffect(() => {
// const handleScroll = (e) => {
//   const scrollAmount = e.target.scrollTop;
//   console.log("Scroll amount:", scrollAmount);

//   if (scrollAmount > 10) {
//     rotateCarousel();
//     // Additional logic based on scroll amount
//   }
// };

// const intervalId = setInterval(() => {
//   rotateCarousel();
// }, 1500);

// const carousel = carouselRef.current;
// carousel.addEventListener("scroll", handleScroll);

// return () => {
// carousel.removeEventListener("scroll", handleScroll);
//     clearInterval(intervalId);
//   };
// }, []);