import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../component/kuriousklogo.jpg";
export const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" text="primary">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Episodes</Nav.Link>
            <NavDropdown title="Subscribe" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Spotify</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Apple podcast
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Youtube</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                google podcast
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
