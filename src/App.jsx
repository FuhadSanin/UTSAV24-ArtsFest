import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import Countdown from "../sections/Countdown/Countdown"

function App() {
  return (
    <>
      <Landing />
      <Countdown />
      <Events />
    </>
  )
}

export default App
