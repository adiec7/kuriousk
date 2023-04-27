import { React } from "react";
import NavBar from "../navbar/navbar";
import Podcastimg from "../img/podcast.jpg";
import './podcast.css'
import { Dropdown } from "react-bootstrap";
import Footer from "../footer/footer";
import EpisodePodcast from "./episode";
export const Podcast = () => {
  return (
    <>
      <NavBar />

      <div className="podcast-hero">
        <img src={Podcastimg} alt="landing img" className="img" />
        <div className="hero-text">
          <h1>
            Welcome to <span className="pageSpan">kurious k </span>podcast
          </h1>
          <Dropdown>
            <Dropdown.Toggle className="btn-lg" id="dropdown-basic">
              Listen Here
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="https://open.spotify.com/show/42YnMzOWb923EkxZ8kU0RV?go=1&sp_cid=dfd0bd0e-3ac2-4f64-9668-7e410c5364a7&utm_source=embed_player_p&utm_medium=desktop&nd=1"
                target="_blank"
              >
                Spotify
              </Dropdown.Item>
              <Dropdown.Item
                href="https://podcasts.apple.com/ng/podcast/kurious-k/id1573065694"
                target="_blank"
              >
                Apple Podcast
              </Dropdown.Item>
              <Dropdown.Item
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82MDJiNzJlOC9wb2RjYXN0L3Jzcw=="
                target="_blank"
              >
                Google Podcast
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <EpisodePodcast/>
      <Footer/>
    </>
  );
};
export default Podcast;
