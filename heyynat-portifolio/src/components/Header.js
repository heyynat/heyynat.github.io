import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark"  sticky="top">
      <Container>
      <Navbar.Brand href="/">Heyynat</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar
          className="me-auto"
          >
            <Nav>
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#projects">Projetos</Nav.Link>
              <NavDropdown title="Contato" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://github.com/heyynat">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/heyynat/">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="mailto:natalifplima@gmail.com">Email</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
  
export default Header;
