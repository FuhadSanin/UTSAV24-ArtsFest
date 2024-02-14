// import React, { useState, useEffect, useRef } from 'react';
// import "./Events.css";

// function Events() {
//   const list = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7', 'Element 8', 'Element 9', 'Element 10', 'Element 11', 'Element 12', 'Element 13', 'Element 14', 'Element 15', 'Element 16', 'Element 17', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 26', 'Element 56'];

//   const ringRef = useRef(null);
//   const carouselRef = useRef(null);
//   const [activeSlide, setActiveSlide] = useState(1);
//   const [newList, setNewList] = useState(list.slice(0, 8));
//   let i = 0;
//   let j = 0;
//   let intervalId = null;

//   // const rotateCarousel = () => {
//   //   const ring = ringRef.current;
//   //   if (ring) {
//   //     ring.style.transform = `rotate(${j++ * -45}deg)`;
//   //     i++;
//   //     if (i >= 8) {
//   //       setNewList(prevList => {
//   //         const updatedList = [...prevList];
//   //         updatedList[(i - 8) % 8] = list[i];
//   //         return updatedList;
//   //       });
//   //       setActiveSlide(j + 1);
//   //     }
//   //   }
//   // };


//   const rotateCarousel = (direction) => {
//     const ring = ringRef.current;
//     if (ring) {
//       if (direction === "forward") {
//         j++;
//       } else if (direction === "backward") {
//         j--;
//       }

//       ring.style.transform = `rotate(${j * -45}deg)`;

//       if (direction === "forward") {
//         i++;
//       } else if (direction === "backward") {
//         i--;
//       }

//       if (i >= list.length) {
//         i = 0;
//       } else if (i < 0) {
//         i = list.length - 1;
//       }

//       setNewList(prevList => {
//         const updatedList = [...prevList];
//         updatedList[i % 8] = list[i % list.length]; // Use modulo to cycle through the list
//         return updatedList;
//       });

//       setActiveSlide((j % list.length) + 1); // Update active slide index
//     }
//   };


//   const rotateCarouselForward = () => {
//     rotateCarousel("forward");
//   };


//   const rotateCarouselBackward = () => {
//     rotateCarousel("backward");
//   };


//   const handleWheel = (e) => {
//     e.preventDefault(); // Prevent default scroll behavior
//     const deltaY = e.deltaY;
//     if (deltaY > 0) {
//       // For example, rotateCarousel() to move to the next slide
//       rotateCarousel("forward")
//     }
//     if (deltaY < 0) {
//       // For example, rotateCarousel() to move to the previous slide
//       rotateCarousel("backward");
//     }

//     rotateCarousel();
//     clearInterval(intervalId); // Reset the rotation interval timer
//     intervalId = setTimeout(() => {
//       intervalId = setInterval(rotateCarousel("forward"), 1500); // Resume rotation after 2 seconds of inactivity
//     }, 2000);
//   };

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     carousel.addEventListener("wheel", handleWheel);

//     intervalId = setInterval(rotateCarousel("forward"), 1500); // Start rotation interval

//     return () => {
//       carousel.removeEventListener("wheel", handleWheel);
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div className='EventsSection'>
//       <div className='EventHeading'>Events</div>
//       <div className='carousel' >
//         <div className='scrollcontrol' ref={carouselRef} onWheel={handleWheel}></div>
//         <div className='ring' ref={ringRef}>
//           {newList.map((element, index) => (
//             <div key={index} className={`slide${index + 1} ${activeSlide === index + 1 ? 'active' : ''}`}>
//               {element}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div >
//   );
// }

// export default Events;



// // useEffect(() => {
// // const handleScroll = (e) => {
// //   const scrollAmount = e.target.scrollTop;
// //   console.log("Scroll amount:", scrollAmount);

// //   if (scrollAmount > 10) {
// //     rotateCarousel();
// //     // Additional logic based on scroll amount
// //   }
// // };

// // const intervalId = setInterval(() => {
// //   rotateCarousel();
// // }, 1500);

// // const carousel = carouselRef.current;
// // carousel.addEventListener("scroll", handleScroll);

// // return () => {
// // carousel.removeEventListener("scroll", handleScroll);
// //     clearInterval(intervalId);
// //   };
// // }, []);



















import React, { useState, useEffect, useRef } from 'react';
import "./Events.css";

function Events() {
  const list = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7', 'Element 8', 'Element 9', 'Element 10', 'Element 11', 'Element 12', 'Element 13', 'Element 14', 'Element 15', 'Element 16', 'Element 17', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 18', 'Element 26', 'Element 56'];

  const ringRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [newList, setNewList] = useState(list.slice(0, 8));
  let i = 0;
  let j = 0;
  let intervalId = null;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const rotateCarousel = (direction) => {
    const ring = ringRef.current;
    if (ring) {
      if (direction === "forward") {
        j++;
      } else if (direction === "backward") {
        j--;
      }

      ring.style.transform = `rotate(${j * -45}deg)`;

      if (direction === "forward") {
        i++;
      } else if (direction === "backward") {
        i--;
      }

      if (i >= list.length) {
        i = 0;
      } else if (i < 0) {
        i = list.length - 1;
      }

      setNewList(prevList => {
        const updatedList = [...prevList];
        updatedList[i % 8] = list[i % list.length]; // Use modulo to cycle through the list
        return updatedList;
      });

      setActiveSlide((j % list.length) + 1); // Update active slide index
    }
  };

  const rotateCarouselForward = () => {
    rotateCarousel("forward");
  };

  const rotateCarouselBackward = () => {
    rotateCarousel("backward");
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    const deltaY = e.deltaY;
    if (deltaY > 0) {
      // Scroll down, rotate carousel forward
      rotateCarouselForward();
    } else if (deltaY < 0) {
      // Scroll up, rotate carousel backward
      rotateCarouselBackward();
    }

    rotateCarousel();
    clearInterval(intervalId); // Reset the rotation interval timer
    intervalId = setTimeout(() => {
      intervalId = setInterval(rotateCarouselForward, 1500); // Resume rotation after 1.5 seconds of inactivity
    }, 2000);
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    if (diff > 20) {
      // Swipe right, rotate carousel backward
      rotateCarouselBackward();
      isDragging = false;

      clearInterval(intervalId); // Reset the rotation interval timer
      intervalId = setTimeout(() => {
        intervalId = setInterval(rotateCarouselForward, 1500); // Resume rotation after 1.5 seconds of inactivity
      }, 2000);

    } else if (diff < -20) {
      // Swipe left, rotate carousel forward
      rotateCarouselForward();
      isDragging = false;
      clearInterval(intervalId); // Reset the rotation interval timer
      intervalId = setTimeout(() => {
        intervalId = setInterval(rotateCarouselForward, 1500); // Resume rotation after 1.5 seconds of inactivity
      }, 2000);
    }
  };

  const handleTouchEnd = () => {
    isDragging = false;
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    carousel.addEventListener("wheel", handleWheel);

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchmove", handleTouchMove);
    carousel.addEventListener("touchend", handleTouchEnd);

    intervalId = setInterval(rotateCarouselForward, 1500); // Start rotation interval

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='EventsSection'>
      <div className='EventHeading'>Events</div>
      <div className='carousel' >
        <div className='scrollcontrol' ref={carouselRef}></div>
        <div className='ring' ref={ringRef}>
          {newList.map((element, index) => (
            <div key={index} className={`slide${index + 1} ${activeSlide === index + 1 ? 'active' : ''}`}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;


