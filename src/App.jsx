import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import EventsPage from "../sections/EventsPage/EventsPage"
import EventsCard from "../sections/EventsPage/EventsCard"

function App() {
  return (
    <>
      <Landing />
      <Events />
      <EventsPage />

    </>
  )
}

export default App
