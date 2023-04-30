import React from "react";
import { Carousel, Button} from "react-bootstrap";
import Podcastimg from "../img/podcast.jpg";
import Homeimg from "../img/merch.jpg";
import Eventimg from "../img/event.jpg";
import Mercahndiseimg from "../img/merchandise.jpg";
import Themeparkimg from "../img/themepark.jpg";
import Moviesimg from "../img/movie.jpg";
import NavBar from "../navbar/navbar";
import { Link } from "react-router-dom";
import "./landingpage.css"

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Homeimg}
            alt="First slide"
          />
          <Carousel.Caption className="mb-5">
            <div>
              <h3>
                Welcome to <span>Kurious K Media</span>
              </h3>
              <p>
                Experience the vibrant stories and rich culture of Africa with
                Kurious K - where media and entertainment come alive through
                podcasts, movies, TV shows, newsletters, and even theme parks!
              </p>
              <Button variant="success btn btn-lg mt-5"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Podcastimg}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              <span>Kurious K</span> Podcast
            </h3>
            <p className="center">Sharing African startup Stories</p>
            <Link to="./Podcast">
              <Button variant="success btn btn-lg mt-5">Visit Podcast</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Eventimg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              <span>Kurious K</span> Events
            </h3>
            <p>
              Experience knowledge-driven events that drive innovation with
              Kurious K Events
            </p>
            <Link to="./events">
              <Button variant="success btn btn-lg mt-5">Check Events</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Mercahndiseimg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              <span>Kurious K</span> Merch
            </h3>
            <p>
              We offer a wide range of branded merchandise for Kurious K Media
              Products.
            </p>
            <Button variant="success btn btn-lg mt-5">Shop Online</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Themeparkimg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              <span>Kurious K</span> Theme parks
            </h3>
            <p>
              Our mission is to create theme parks that offer visitors an
              unforgettable adventure while promoting African culture and
              heritage.
            </p>
            <Button variant="success btn btn-lg mt-5">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Moviesimg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="d">
              <span>Kurious K</span> Studios
            </h3>
            <p>
              we aim to differentiate ourselves and become a leading player in
              the African film industry.
            </p>
            <Button variant="success btn btn-lg mt-5">Coming Soon</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default LandingPage;
