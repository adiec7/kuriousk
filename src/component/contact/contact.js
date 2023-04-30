import { Container, Row, Col } from 'react-bootstrap';
import ContactImg from '../img/contactus.jpg'
import NavBar from '../navbar/navbar';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../footer/footer';
import './contact.css'
function ContactForm() {
  return (
    <>
    <NavBar/>
    <section className="contact-hero">
  <div className="overlay"></div>
  <img src={ContactImg} alt="landing img" className="img" />
  <div className="contact-text ">
    <h1>
      About <span className="pageSpan">kurious k </span>media
    </h1>
    <h4>We Have Kurious K <TypeAnimation
      sequence={[
        'Podcast', // Types 'One'
        2000, // Waits 1s
        'Events', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Merch', // Types 'Three' without deleting 'Two'
        2000,
        'Theme parks',
        2000,
        'Studios',
        2000,
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
    /></h4>
    {/* <Button variant="info" href="#episodes" >View Episodes</Button> */}
  </div>
</section>

        <Container className='mt-5 mb-5'>
          <h2 className='text-center'>Write Or Visit Us Here</h2>
          <Row>
            <Col md={6}>
              <form  action="http://kuriouskmedia.com/submit-form" method="POST" className=".form-shadow">
                <div className="mb-3">
                  <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="mb-3">
                  
                  <input type="text" className="form-control" id="company" placeholder="Enter company name | or what you do" />
                </div>
                <div className="mb-3">
                  
                  <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-lg mb-3">Submit</button>
              </form>
            </Col>
            <Col md={6}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.676928774878!2d3.478372614773368!3d6.427484995319432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b901a87dc4ce5%3A0xf8f56888045640e1!2sRoyal%20Office%20Building!5e0!3m2!1sen!2sng!4v1651095742066!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0, height: "100%"}}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </Col>
          </Row>
        </Container>
    <Footer/>
    </>
  );
}




export default ContactForm;

