import { Navbar,Container,Offcanvas,Nav,NavDropdown,Form,Button } from "react-bootstrap";
import logo from "../component/kuriousklogo.jpg";
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
            <Navbar.Brand href="#">
              <img src={logo} alt="brand logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Kurious K Media
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Podcast</Nav.Link>
                  <Nav.Link href="#action3">Event</Nav.Link>
                  <Nav.Link href="#action4">Theme pack</Nav.Link>
                  <Nav.Link href="#action5">merchandise</Nav.Link>
                  <Nav.Link href="#action6">Movies</Nav.Link>
                  <NavDropdown
                    title="Podcast"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="https://open.spotify.com/show/42YnMzOWb923EkxZ8kU0RV?go=1&sp_cid=dfd0bd0e-3ac2-4f64-9668-7e410c5364a7&utm_source=embed_player_p&utm_medium=desktop&nd=1">
                      Spotify
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://podcasts.apple.com/ng/podcast/kurious-k/id1573065694">
                      Apple Podcast
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82MDJiNzJlOC9wb2RjYXN0L3Jzcw==">
                      Google Podcast
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://kuriouskpodcastbykolapo.substack.com/">
                      Winner of 2023 Tech Bro of the year Award AOT 4.0
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://kuriouskpodcastbykolapo.substack.com/">
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
