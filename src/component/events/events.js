import NavBar from "../navbar/navbar";
import './events.css';
import Footer from "../footer/footer";
import Startupimg from "../img/startup.jpg";
import { Card,CardGroup, Row,Col} from "react-bootstrap";
const EventsPage = () => {
  return (
    <>
      <NavBar />
      <div id="events_image">
        <div className="events_text lead">
          <h1>
            <span>Kurious K</span> Events
          </h1>
          <p className="lead">
            Kurious K Events specializes in organizing corporate events and
            industry-specific gatherings, bringing together experts to discuss
            the latest trends, challenges, and opportunities. Let us help you
            drive innovation and unlock new opportunities through our
            knowledge-driven events.
          </p>
          <a className="btn btn-primary btn-lg" href="#t" role="button">
            Sponsor events
          </a>
        </div>
      </div>
      <section className="container mt-5 lead">
        <h2>Upcoming Events</h2>

        <CardGroup>
          <Row xs={1} md={12} className="g-4">
            <Col>
              <Card className="mb-5 card_text">
                <Card.Img variant="top " src={Startupimg} className="starimg" />
                <Card.Body>
                  <Card.Title>
                    <h2>
                      {" "}
                      Kurious K Startup Investor Connect Event
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    Kurious K Startup Investor Connect event is a unique
                    opportunity for startups and investors to connect,
                    collaborate, and explore potential investment opportunities.
                  </Card.Text>
                  <a
                    className="btn card-btn btn-lg"
                    href="https://forms.zohopublic.com/kuriouskmedia/form/KuriousKStartupInvestorConnectExclusive/formperma/9QpSkis6pnIMZFvd-70esEX1dewds-UQswm6pCfMT7o"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register
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
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
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
      <Footer/>
    </>
  );
};
export default EventsPage;
