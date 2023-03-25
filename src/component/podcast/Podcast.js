import { React } from "react";
import NavBar from "../navbar/navbar";
import Podcastimg from "../img/podcast.jpg";
import './podcast.css'
export const Podcast = () => {
  return (
    <>
      
        <NavBar />
      
      <div className="">
        <img src={Podcastimg} alt="landing img" className="img"/>
        <div className="hero-text">
        <h1>Welcome to kurious k podcast</h1>
        <a href="#more" className="btn-lg btn-success mt-5">
          Learn more
        </a>
        </div>
      </div>
    </>
  );
};
export default Podcast;
