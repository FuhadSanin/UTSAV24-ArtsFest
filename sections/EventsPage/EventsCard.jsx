import React, { useState, useEffect } from "react"
import "./EventsCard.css"
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion"


const EventsCard = (props) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    console.log(xPct);
    console.log(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    console.log(x);
    console.log(y);
  };


  return (


    // <motion.div
    //   onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
    //   style={{
    //     rotateY,
    //     rotateX,
    //     transformStyle: "preserve-3d",
    //   }} id="EventsCard0"
    // >
    //   {props.id % 3 === 0 && (
    //     <div className="EventsCard-Container0"
    //       style={{
    //         transform: "translateZ(75px)",
    //         transformStyle: "preserve-3d",
    //       }}>
    //       <div className="EventsCard-Title-Container"
    //       >
    //         {props.title}</div>
    //     </div>
    //   )}
    //   {
    //     props.id % 3 === 1 && (
    //       <div className="EventsCard-Container1"
    //         style={{
    //           transform: "translateZ(75px)",
    //           transformStyle: "preserve-3d",
    //         }}>
    //         <div className="EventsCard-Title-Container"

    //         >
    //           {props.title}</div>
    //       </div>
    //     )
    //   }
    //   {
    //     props.id % 3 === 2 && (
    //       <div className="EventsCard-Container2"
    //         style={{
    //           transform: "translateZ(75px)",
    //           transformStyle: "preserve-3d",
    //         }}>
    //         <div className="EventsCard-Title-Container"
    //         >
    //           {props.title}</div>
    //       </div>
    //     )
    //   }

    // </motion.div >
    <div className="view">

      {props.id % 3 == 0 && (
        <div className="group">
          < div className="EventsCard">
            < div className="EventsCard0">
              <div className="EventsCard-Title-Container">
                {props.title}
              </div>
            </div>
          </div >
          <div className="BackCard">

          </div >

        </div>
      )
      }

      {
        props.id % 3 == 1 && (
          <div className="group">
            < div className="EventsCard">
              < div className="EventsCard1">
                <div className="EventsCard-Title-Container">
                  {props.title}
                </div>
              </div>
            </div >
            <div className="BackCard">


            </div>
          </div >
        )
      }

      {
        props.id % 3 == 2 && (
          <div className="group">
            < div className="EventsCard">
              < div className="EventsCard2">
                <div className="EventsCard-Title-Container">
                  {props.title}
                </div>
              </div>
            </div >
            <div className="BackCard">

            </div>
          </div >
        )
      }



    </div >

  );
};

export default EventsCard
