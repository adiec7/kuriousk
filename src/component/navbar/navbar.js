import { Navbar,Container,Offcanvas,Nav,NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/kuriousklogo.png";
import './navbar.css'
export const NavBar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 container fixed-top  rounded-bottom "
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="brand logo" className="logo" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              className="navbar-toggler"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">Kurious K Media</Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/">Home</Link>
                  <Link to="/Podcast">Podcast</Link>
                  <Link
                    to="/events
                "
                  >
                    Event
                  </Link>
                  <Nav.Link href="#action4">Theme park</Nav.Link>
                  <Nav.Link href="#action5">Merchandise</Nav.Link>
                  <Nav.Link href="#action6">Movies</Nav.Link>
                  <Nav.Link href="#action6">Contact Us</Nav.Link>
                  <NavDropdown
                    title="Podcast"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="text-light"
                  >
                    <NavDropdown.Item href="https://open.spotify.com/show/42YnMzOWb923EkxZ8kU0RV?go=1&sp_cid=dfd0bd0e-3ac2-4f64-9668-7e410c5364a7&utm_source=embed_player_p&utm_medium=desktop&nd=1" target="_blank">
                      Spotify
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://podcasts.apple.com/ng/podcast/kurious-k/id1573065694" target="_blank">
                      Apple Podcast
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82MDJiNzJlOC9wb2RjYXN0L3Jzcw==" target="_blank">
                      Google Podcast
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://tr.ee/U4T-CbabYP" target="_blank">
                      Winner of 2022 Tech Bro of the year Award AOT
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://kuriouskpodcastbykolapo.substack.com/" target="_blank">
                      Read Articles on Substack
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
