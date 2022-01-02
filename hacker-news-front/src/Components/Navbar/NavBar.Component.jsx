import React from "react";
import { Navbar, Container } from "react-bootstrap";
import {Link } from "react-router-dom";

// I used Link from react-router-dom instead of Nav.Link from react-bootstrap because
//the latter did not allow me to successfully switch between routes
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
              <Link to="/top10stories" activeStyle>Top Ten Stories</Link>
              <Link to="/top10authors" activeStyle>Top Ten Authors</Link> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
