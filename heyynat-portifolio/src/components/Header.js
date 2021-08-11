import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="/">Heyynat</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#about">Sobre</Nav.Link>
            <NavDropdown title="Contato" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/heyynat">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/heyynat/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="mailto:natalifplima@gmail.com">Email</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://heyynat.github.io/trybewallet">TrybeWallet</NavDropdown.Item>
              <NavDropdown.Item href="https://heyynat.github.io/trivia">Trivia</NavDropdown.Item>
              <NavDropdown.Item href="https://heyynat.github.io/app-recipes">App Recipes</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
  
export default Header;
