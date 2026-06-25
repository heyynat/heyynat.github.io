import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { profile } from '../services/config';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="site-navbar">
      <Container className="site-navbar-inner">
        <Navbar.Brand href="/">{profile.name}</Navbar.Brand>
        <ThemeToggle />
        <Navbar.Toggle aria-controls="site-navbar" />
        <Navbar.Collapse id="site-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#experience">Experiência</Nav.Link>
            <Nav.Link href="#education">Formação</Nav.Link>
            <NavDropdown title="Contato" id="contact-dropdown" align="end">
              <NavDropdown.Item
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href={`mailto:${profile.email}`}>
                E-mail
              </NavDropdown.Item>
              <NavDropdown.Item href={`tel:${profile.phone.replace(/\D/g, '')}`}>
                Telefone
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
