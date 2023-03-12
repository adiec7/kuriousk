import React from "react";
import { Carousel, Button} from "react-bootstrap";
import Podcastimg from "../component/img/podcast.jpg";
import Homeimg from "../component/img/merch.jpg";
import Eventimg from "../component/img/event.jpg";
import Mercahndiseimg from "../component/img/merchandise.jpg";
import Themeparkimg from "../component/img/themepark.jpg";
import Moviesimg from "../component/img/movie.png";
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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="success btn btn-lg">Read more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Podcastimg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Read more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Mercahndiseimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Read more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Themeparkimg}
          alt="Third slide"
        />

        <Carousel.Caption variant="lead">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Read more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Moviesimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="d">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success btn btn-lg">Read more</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default LandingPage;
