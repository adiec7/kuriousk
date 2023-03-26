import logo from "../img/kuriousklogo.jpg";
import "./footer.css";
import { FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare,FaFacebookSquare,FaLinkedin,} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section>
        <footer className="footer-card">
          <div className="card footer-card">
            <div className="card-header ">
              <img src={logo} alt="logo" className="footer-img" />
              <p className="text-center text-light">
                <a href="tel:+2347069359788">+2347069359788</a> <br />
                <a href="mailto:Kolapo@kuriouskmedia.com">
                  Kolapo@kuriouskmedia.com
                </a>
              </p>
            </div>
            <div className="card-body text-center">
              <div className=" text-sm-start" id="social">
                <a href="#action">
                  <FaWhatsappSquare />
                </a>
                <a href="#action1">
                  <FaInstagramSquare />
                </a>
                <a href="#action2">
                  <FaTwitterSquare />
                </a>
                <a href="#action3">
                  <FaFacebookSquare />
                </a>
                <a href="#action4">
                  <FaLinkedin />
                </a>
              </div>
              <p className="card-text">Eti Osa, lagos, Nigeria</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
