import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import Countdown from "../sections/Countdown/Countdown"
import Registration from "../sections/Registration/Registration"

function App() {
  return (
    <>
      <Landing />
      <Countdown />
      <Events />
      <Registration />
    </>
  )
}

export default App
