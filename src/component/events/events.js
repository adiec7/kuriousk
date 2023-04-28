import NavBar from "../navbar/navbar";
import './events.css';
import Footer from "../footer/footer";
import Startupimg from "../img/startup.png";
import Cooperateimg from "../img/cooperate.png";
import { Card,CardGroup, Row,Col,ListGroup,Button} from "react-bootstrap";
import {AiOutlineFieldTime,AiTwotoneTags,AiTwotoneCalendar,} from "react-icons/ai";
import {MdLocationCity} from "react-icons/md";
import {BiChevronsRight} from "react-icons/bi"
import React, { useState } from "react";
const EventsPage = () => {
  const [events, ] = useState([
    {
      title: "Kurious K Startup Investor Connect Event",
      date: "May 12, 2023",
      time: "5:00pm WAT",
      location: "Lagos",
      description:
        "Kurious K Startup Investor Connect event is a unique opportunity for startups and investors to connect, collaborate, and explore potential investment opportunities.",
      image: Startupimg ,
      networking: "Networking, Investment, Partnerships",
      button1:  <Button className="card-btn " href="https://forms.zohopublic.com/kuriouskmedia/form/KuriousKStartupInvestorConnectExclusive/formperma/9QpSkis6pnIMZFvd-70esEX1dewds-UQswm6pCfMT7o" target="_blank">Register</Button>,
      button2: <Button className="card-btn " href="mailto:Kolapo@kuriouskmedia.com" target="_blank">Partner</Button>,
      button3: <Button className="card-btn " href="/investorconnect">Learn More  <BiChevronsRight/></Button>,
    },
    {
      title: "Kurious K Corporate Innovation Event",
      date: "Thursday Nov 2, 2023",
      time: "11:00am",
      location: "Lagos",
      description: "Kurious K Corporate Innovation Event aims to explore how corporate can drive support for the startup ecosystem in Africa and discuss the future of innovation on the continent.",
      image: Cooperateimg,
      networking: "Corporate Innovation, Partnerships",
      button1: <Button className="card-btn ">Coming Soon</Button>,
    },


  ]);

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
          <a
            className="btn btn-primary btn-lg text-dark event_btn"
            href="#events"
            role="button"
          >
            View Events
          </a>
        </div>
      </div>
      <section className="container mt-5 lead" id="events">
        <h2>Upcoming Events</h2>

        <CardGroup>
          <Row xs={1} md={2} className="g-4">
            {events.map((event) => (
              <Col key={event.title}>
                <Card className="mb-5 ">
                  {event.image && (
                    <Card.Img variant="top" src={event.image} className="starimg" />
                  )}
                  <Card.Body className="card_text">
                    <Card.Title>
                      <h2 className="text-light"> {event.title}</h2>
                    </Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p>
                          {" "}
                          <AiTwotoneCalendar className="events-icons" />{" "}
                          {event.date} 
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                      <p><AiOutlineFieldTime className="events-icons" />{" "}
                          {event.time}</p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        
                        <p>{" "}<AiTwotoneTags className="events-icons"/>{" "} {event.networking}</p>
                        </ListGroup.Item>
                      <ListGroup.Item>
                        <p>{" "}
                        <MdLocationCity className="events-icons" />{" "}
                        {event.location}</p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {event.button1}{" "}
                        {event.button2}{" "}
                        {event.button3}
                      </ListGroup.Item>
                    </ListGroup>
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </section>
      <Footer/>
    </>
  );
};
  
export default EventsPage;
