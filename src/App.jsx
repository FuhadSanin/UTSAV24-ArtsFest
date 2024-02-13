import react from "react"
import "./App.css"
import { Landing, Events } from "../sections"
import EventsPage from "../sections/EventsPage/EventsPage"
import EventsCard from "../sections/EventsPage/EventsCard"
import Countdown from "../sections/Countdown/Countdown"
import Registration from "../sections/Registration/Registration"
import Navbar from "../sections/Navbar/Navbar"
import Scoreboard from "../sections/Scoreboard/Scoreboard"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Team from "../sections/Team/Team"
import Footer from "../sections/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
        <Navbar />
        <Landing />
        <Countdown />
        <Team />
        <Events />
        <Scoreboard />
        {/* <Registration /> */}


        <Footer />
        </>}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/events/:name" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
    // <>

    // </>
  )
}

export default App
