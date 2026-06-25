import { Container, Nav } from 'react-bootstrap';

function Footer() {
  const bgStyle = { backgroundColor: '#f5f5f5' };

  return (
    <footer style={bgStyle} className="mt-auto py-4 text-center">
      <Container>
        Feito por{' '}
        <Nav.Link
          className="badge badge-dark d-inline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/heyynat"
          aria-label="GitHub de Natali Lima"
        >
          Natali Lima
        </Nav.Link>{' '}
        utilizando{' '}
        <i className="devicon-react-original" aria-hidden="true" />
        <i className="devicon-bootstrap-plain" aria-hidden="true" />
      </Container>
    </footer>
  );
}

export default Footer;
