import react, { useState, useEffect } from "react"
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
import Soon from "../sections/Soon/Soon"
import Aos from "aos"
import "aos/dist/aos.css"
import Loader from "../sections/Loader/Loader"

function App() {
  Aos.init();
  const currentTime = new Date();
  const disableSoon = currentTime.getHours() > 20 || (currentTime.getHours() === 20 && currentTime.getMinutes() >= 40);
  console.log(currentTime.getHours());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Add the 'no-scroll' class to the body when loading is true
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      clearTimeout(timeout);
      document.body.classList.remove('no-scroll'); // Remove the class when the component unmounts
    };
  }, [loading]);

  return (
    <BrowserRouter>
    {loading && <Loader />}
    <Routes>
      <Route path="/" element={<>
        {disableSoon?null:<Soon/>}
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
