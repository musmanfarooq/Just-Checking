import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavMenu() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>Usman Farooq</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#About Me">About Me</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
