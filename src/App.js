
import LandingPage from "./component/carousel/landingpage";
import Podcast from "./component/podcast/Podcast";
import EventsPage from "./component/events/events";
import EventDetails from "./component/eventdetails/eventdetail";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/eventdetail" element={EventDetails}></Route>
      </Routes>
  );
}

export default App;
