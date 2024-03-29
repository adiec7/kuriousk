import logo from "../img/kuriousklogo.png";
import "./footer.css";
import { FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare,FaFacebookSquare,FaLinkedin,} from "react-icons/fa";
import { IconContext } from "react-icons";
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
                <a href="mailto:hello@kuriouskmedia.com">
                  hello@kuriouskmedia.com
                </a>
              </p>
            </div>
            <div className="card-body text-center">
              <div className=" text-sm-start icons" id="social">
                <IconContext.Provider value={{ className: "footer-react-icons " }}>
                  <a href="#action">
                    <FaWhatsappSquare />
                  </a>
                  <a href="https://www.instagram.com/kurious_kpodcast/">
                    <FaInstagramSquare />
                  </a>
                  <a href="#action2">
                    <FaTwitterSquare />
                  </a>
                  <a href="#action3">
                    <FaFacebookSquare />
                  </a>
                  <a href="https://www.linkedin.com/company/kurios-k-media/">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
              </div>
              <p className="card-text">Lagos, Nigeria</p>
              <a href="https://karisoft.io/">
                    Made by karisoft Solution 
                  </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
