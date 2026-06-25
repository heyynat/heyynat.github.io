import { Carousel, Container, Nav } from 'react-bootstrap';
import { projects } from '../services/config';

function Projects() {
  return (
    <Container className="container-fluid text-center justify-content-center align-items-center pb-5">
      <h1 id="projects" className="display-6 my-5">
        <mark className="text-white" style={{ backgroundColor: '#42113C' }}>
          Projetos
        </mark>
      </h1>
      <Carousel>
        {projects.map(({ title, storyline, url, image }) => (
          <Carousel.Item interval={5000} key={title}>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="p-0"
            >
              <img
                className="d-block w-100 project-carousel-image"
                src={image}
                alt={title}
              />
              <Carousel.Caption>
                <h3>{title}</h3>
                <p>{storyline}</p>
              </Carousel.Caption>
            </Nav.Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Projects;
