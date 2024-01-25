import React, { useEffect } from "react"
import "./CircularText.css"

const CircularText = () => {
  useEffect(() => {
    const text = document.querySelector(".circular-text h1")
    const innerText = text.innerHTML
    text.innerHTML = innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${
            (360 / innerText.length) * i
          }deg)">${char}</span>`
      )
      .join("")
  }, [])
  return (
    <div className="circle">
      <div className="circular-text">
        <h1>Feb-28-Mar-1-Mar-2-</h1>
      </div>
    </div>
  )
}

export default CircularText
