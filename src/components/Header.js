import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="menubar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="https://calinfo.in/Ems/user/cal.png" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/apply_leave">
              <Nav.Link>Apply For Leave</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/edit_profile">
              <Nav.Link>Edit Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/view_leave">
              <Nav.Link>View</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
