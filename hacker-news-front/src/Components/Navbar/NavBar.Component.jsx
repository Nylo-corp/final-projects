import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand exact href="/">Hacker News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
              <Nav.Link as={Link} to="/top10stories" activeStyle>Top Ten Stories</Nav.Link>
              <Nav.Link as={Link} to="/top10authors" activeStyle>Top Ten Authors</Nav.Link> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
