import React, { useEffect, useRef } from "react"
import Baffle from "baffle"
import "./Landing.css"
import CircularText from "./CircularText"

const Landing = () => {
  const textRef = useRef(null)
  const words = [" UTSAV. ", " ഉത്സവ്. ", " उत्सव. "]
  const shuffleInterval = 5000

  useEffect(() => {
    const text = Baffle(textRef.current)
    let intervalId

    const startShuffle = () => {
      text
        .set({
          characters: "░░░ █▒▓░> /█<░▓ █░",
          speed: 120,
        })
        .text(() => words[Math.floor(Math.random() * words.length)])
        .start()
        .reveal(5000)
    }

    startShuffle()

    intervalId = setInterval(() => {
      startShuffle()
    }, shuffleInterval)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [words, shuffleInterval])

  const handleScroll = () => {
    const scrollValue = window.scrollY
    const textElement = document.querySelector(".text h1")

    // Adjust the scaleFactor and other values as needed
    const scaleFactor = 1 + scrollValue / 4000

    textElement.style.transform = `scale(${scaleFactor})`
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div id="Landing">
      {/* <div className="circular-ring">
        <CircularText />
      </div> */}
      <div className="text">
        <h1 ref={textRef}></h1>
      </div>
    </div>
  )
}

export default Landing
