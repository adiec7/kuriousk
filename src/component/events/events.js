import NavBar from "../navbar/navbar";
import './events.css';
import Footer from "../footer/footer";
import Startupimg from "../img/startup.png";
import Cooperateimg from "../img/cooperate.png";
import { Card,CardGroup, Row,Col,ListGroup,} from "react-bootstrap";
import {AiOutlineFieldTime,AiTwotoneTags,AiTwotoneCalendar,} from "react-icons/ai";
import {MdLocationCity} from "react-icons/md";
import {BiChevronsRight} from "react-icons/bi"
import { Link } from "react-router-dom";
const EventsPage = () => {
  return (
    <>
      <NavBar />
      <div id="events_image">
        <div className="events_text lead">
          <h1>
            <span className="pageSpan">Kurious K</span> Events
          </h1>
          <p className="lead">
            <span className="pageSpan">Kurious K</span> Events specializes in
            organizing corporate events and industry-specific gatherings,
            bringing together experts to discuss the latest trends, challenges,
            and opportunities. Let us help you drive innovation and unlock new
            opportunities through our knowledge-driven events.
          </p>
          <a className="btn btn-primary btn-lg" href="#events" role="button">
            Check Events
          </a>
        </div>
      </div>
      <section className="container mt-5 lead" id="events">
        <h2>Upcoming Events</h2>

        <CardGroup>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="mb-5 ">
                <Card.Img variant="top " src={Startupimg} className="starimg" />
                <Card.Body className="card_text">
                  <Card.Title>
                    <h2 className="pageSpan">
                      {" "}
                      Kurious K Startup Investor Connect Event
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    Kurious K Startup Investor Connect event is a unique
                    opportunity for startups and investors to connect,
                    collaborate, and explore potential investment opportunities.
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <AiTwotoneCalendar className="events-icons" />{" "}
                        Friday May 12, 2023{" "}
                        <AiOutlineFieldTime className="events-icons" /> 5:00pm{" "}
                      </ListGroup.Item>{" "}
                      <ListGroup.Item>
                        {" "}
                        <AiTwotoneTags className="events-icons" />
                        networking, investment, partnerships
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <MdLocationCity className="events-icons" />
                        Lagos
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <div className="row ">
                    <div className="col-md-4 col-sm-12 mx-auto">
                      <a
                        className="btn card-btn btn-lg"
                        href="https://forms.zohopublic.com/kuriouskmedia/form/KuriousKStartupInvestorConnectExclusive/formperma/9QpSkis6pnIMZFvd-70esEX1dewds-UQswm6pCfMT7o"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Register
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-12 mx-auto">
                      <a
                        className="btn card-btn btn-lg"
                        href="mailto:Kolapo@kuriouskmedia.com"
                        role="button"
                        rel="noreferrer"
                      >
                        Partner
                      </a>
                    </div>
                    <div className="col-md-4 col-sm mx-auto">
                      <Link
                        to="#l"
                        className="btn  btn-lg btn_learn_more"
                        href="#j"
                        role="button"
                        
                        rel="noreferrer"
                      >
                        Learn More
                        <BiChevronsRight />
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-5 ">
                <Card.Img
                  variant="top "
                  src={Cooperateimg}
                  className="starimg"
                />
                <Card.Body className="card_text">
                  <Card.Title>
                    <h2 className="pageSpan">
                      {" "}
                      Kurious K Corporate Innovation Event
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    Kurious K Corporate Innovation Event aims to explore how
                    corporate can drive support for the startup ecosystem in
                    Africa and discuss the future of innovation on the
                    continent.
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <AiTwotoneCalendar className="events-icons" />{" "}
                        Thursday Nov 2, 2023{" "}
                        <AiOutlineFieldTime className="events-icons" /> 11:00am{" "}
                      </ListGroup.Item>{" "}
                      <ListGroup.Item>
                        <AiTwotoneTags className="events-icons" />
                        corporate innovation, partnerships{" "}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <MdLocationCity className="events-icons" />
                        Lagos
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <a
                    className="btn card-btn btn-lg"
                    href="#n"
                    role="button"
                    rel="noreferrer"
                  >
                    Coming Soon
                  </a>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col> */}
          </Row>
        </CardGroup>
      </section>
      <Footer />
    </>
  );
};
export default EventsPage;
