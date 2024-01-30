import React, { useEffect, useState } from "react"
import "./CircularText.css"

const CircularText = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const text = "---UTSAV---2024";
    setChars(text.split(""));
  }, []);

  return (
    <div className="circle">
      <div className="circular-text">
        <h1>
          {chars.map((char, i) => (
            <span
              key={i}
              style={{ transform: `rotate(${(360 / chars.length) * i}deg)` }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default CircularText;