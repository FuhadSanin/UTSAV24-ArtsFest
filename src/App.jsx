import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import Countdown from "../sections/Countdown/Countdown"
import Navbar from "../sections/Navbar/Navbar"

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Landing />
        <Countdown />
        <Events />
      </div>
      
    </>
  )
}

export default App
