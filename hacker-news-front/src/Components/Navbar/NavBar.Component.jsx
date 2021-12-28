import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link to="/">Top News</Nav.Link>
              <Nav.Link to="/">
                Other News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
