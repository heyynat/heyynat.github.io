import React from "react";
import { Container, Nav } from "react-bootstrap";

const Footer = () => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-4 text-center ">
      <Container>
        Feito por{" "}
        <Nav.Link
          className="badge badge-dark"
          target="_blank"
          href="https://github.com/heyynat"
          aria-label="My GitHub"
        >
          Natali Lima
        </Nav.Link>
          {" "}
        utilizando
          {" "}
        <i class="devicon-react-original"></i>
        <i class="devicon-bootstrap-plain"></i>
      </Container>
    </footer>
  );
};

export default Footer;
