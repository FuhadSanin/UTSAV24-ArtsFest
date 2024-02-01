import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import EventsPage from "../sections/EventsPage/EventsPage"
import EventsCard from "../sections/EventsPage/EventsCard"
import Countdown from "../sections/Countdown/Countdown"
import Registration from "../sections/Registration/Registration"
import Navbar from "../sections/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Countdown />
      <Events />
      <Registration />
      <EventsPage />
    </>
  )
}

export default App
