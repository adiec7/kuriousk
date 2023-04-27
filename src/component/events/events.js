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
// import EventDetails from "../eventdetails/eventdetail";
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
          <a className="btn btn-primary btn-lg text-dark event_btn" href="#events" role="button">
            View Events
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
                    <h2 className="text-light">
                      {" "}
                      Kurious K Startup Investor Connect Event
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {" "}
                      Kurious K Startup Investor Connect event is a unique
                      opportunity for startups and investors to connect,
                      collaborate, and explore potential investment
                      opportunities.
                    </p>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p >
                          <AiTwotoneCalendar className="events-icons" />{" "}
                          Friday May 12, 2023{" "}
                        </p>
                      </ListGroup.Item>{" "}
                      <ListGroup.Item>
                        <p className="listgruop_item">
                          <AiOutlineFieldTime className="events-icons" /> 5:00pm
                          WAT{" "}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <p className="listgruop_item">
                          {" "}
                          <AiTwotoneTags className="events-icons" />
                          networking, investment, partnerships
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p >
                          <MdLocationCity className="events-icons" />
                          Lagos
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <button type="button" className="btn "> <a
                        className="btn card-btn btn-lg"
                        href="https://forms.zohopublic.com/kuriouskmedia/form/KuriousKStartupInvestorConnectExclusive/formperma/9QpSkis6pnIMZFvd-70esEX1dewds-UQswm6pCfMT7o"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Register
                      </a></button>
                      
                      <button type="button" className="btn "><a
                        className="btn card-btn btn-lg"
                        href="mailto:Kolapo@kuriouskmedia.com"
                        role="button"
                        rel="noreferrer"
                      >
                        Partner
                      </a></button>

                      <button type="button " className="btn "> <Link
                        className="btn  btn-lg btn_learn_more"
                        to="/investorconnect"
                        role="button"
                        rel="noreferrer"
                      >
                        Learn More
                        <BiChevronsRight />
                      </Link></button>
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
                    <h2 className="text-light">
                      {" "}
                      Kurious K Corporate Innovation Event
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Kurious K Corporate Innovation Event aims to explore how
                      corporate can drive support for the startup ecosystem in
                      Africa and discuss the future of innovation on the
                      continent.
                    </p>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p>
                          <AiTwotoneCalendar className="events-icons " />
                          Thursday Nov 2, 2023
                        </p>
                      </ListGroup.Item>{" "}
                      <ListGroup.Item>
                        <p className="listgruop_item">
                          <AiOutlineFieldTime className="events-icons" />
                          11:00am WAT{" "}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p className="listgruop_item">
                          <AiTwotoneTags className="events-icons" />
                          corporate innovation, partnerships
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p >
                          <MdLocationCity className="events-icons" />
                          Lagos
                        </p>
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
