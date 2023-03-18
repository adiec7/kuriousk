import React from "react";
import { Carousel, Button} from "react-bootstrap";
import Podcastimg from "../component/img/podcast.jpg";
import Homeimg from "../component/img/merch.jpg";
import Eventimg from "../component/img/event.jpg";
import Mercahndiseimg from "../component/img/merchandise.jpg";
import Themeparkimg from "../component/img/themepark.jpg";
import Moviesimg from "../component/img/movie.jpg";
const LandingPage = () => {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Homeimg}
          alt="First slide"
        />
        <Carousel.Caption className="mb-5">
          <div className="text-center">
            <h3>Welcome to Kurious K Media</h3>
            <p>
              Kurious K is a media and entertainment company set to tell unique
              African stories across various platforms, including podcasts,
              movies, TV shows, newsletters, and theme parks.
            </p>
            <Button variant="success btn btn-lg mt-5">Read more</Button>
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
          <h3>Kurious K Podcast</h3>
          <p>Sharing African startup Stories</p>
          <Button variant="success btn btn-lg mt-5">Visit Podcast</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Eventimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Kurius K Events</h3>
          <p>
            Kurious K Events specializes in organizing and managing corporate
            events, conferences, trade shows, and other large-scale gatherings.
          </p>
          <Button variant="success btn btn-lg mt-5">Work With Us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Mercahndiseimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Kurious K Merch</h3>
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
          <h3>Kurious K Theme parks</h3>
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
          <h3 className="d">Kurious K Studios</h3>
          <p>
            we aim to differentiate ourselves and become a leading player in the
            African film industry.
          </p>
          <Button variant="success btn btn-lg mt-5">Coming Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default LandingPage;
