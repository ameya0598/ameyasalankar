import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <Navbar
      style={{ background: "#061526" }}
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Link to="root" spy={true} smooth={true} href="#">
          <Navbar.Brand>Ameya Salankar</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li> </li>
          </Nav>
          <Nav className="mr-right" variant="pills">
            <Nav.Item>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                className="nav-link"
                href="#"
              >
                Portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                className="nav-link"
                href="#"
              >
                About Me
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="contactme"
                spy={true}
                smooth={true}
                className="nav-link"
                href="#"
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
