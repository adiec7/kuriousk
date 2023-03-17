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
            <Button variant="success btn btn-lg">Read more</Button>
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
          <Button variant="success btn btn-lg">Read more</Button>
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
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Coming Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Mercahndiseimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Kurious K merchandise</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Coming Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Themeparkimg}
          alt="Third slide"
        />

        <Carousel.Caption variant="lead">
          <h3>Kurious K Theme park</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Coming Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Moviesimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="d">Kurious K Movies</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Coming Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default LandingPage;
