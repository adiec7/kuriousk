import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';
function ContactForm() {
  return (
    <>
    <NavBar/>
    <div className="contact-container">
      <div className="overlay">
        <Container className='mt-5'>
          <Row>
            <Col md={6}>
              <form>
                <div className="mb-3">
                  {/* <label htmlFor="firstName" className="form-label">First Name</label> */}
                  <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="lastName" className="form-label">Last Name</label> */}
                  <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="email" className="form-label">Email Address</label> */}
                  <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="phone" className="form-label">Phone Number</label> */}
                  <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="company" className="form-label">Company</label> */}
                  <input type="text" className="form-control" id="company" placeholder="Enter company name" />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="message" className="form-label">Message</label> */}
                  <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-lg">Submit</button>
              </form>
            </Col>
            <Col md={6}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.676928774878!2d3.478372614773368!3d6.427484995319432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b901a87dc4ce5%3A0xf8f56888045640e1!2sRoyal%20Office%20Building!5e0!3m2!1sen!2sng!4v1651095742066!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <section>
    {/* <Footer/> */}
    </section>
    </>
  );
}

export default ContactForm;
