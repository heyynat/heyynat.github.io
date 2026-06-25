import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  const logo = '<Heyynat />';

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <NavDropdown title="Contato" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                href="https://github.com/heyynat"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/heyynat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:natalifplima@gmail.com">
                Email
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
