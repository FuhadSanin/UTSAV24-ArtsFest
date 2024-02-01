import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import EventsPage from "../sections/EventsPage/EventsPage"
import EventsCard from "../sections/EventsPage/EventsCard"
import Countdown from "../sections/Countdown/Countdown"
import Navbar from "../sections/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Countdown />
      <EventsPage />
    </>
  )
}

export default App
