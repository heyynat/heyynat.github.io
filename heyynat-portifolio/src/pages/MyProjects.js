import React from 'react';
import { Carousel, Container, Nav } from 'react-bootstrap';
import { projects } from  '../services/config'

const MyProjects = () => {
  return (
    <Container>
      <Carousel>
        {projects.map(({title, storyline, url, image}, index) => 
            <Carousel.Item interval={1000}>
              <Nav.Item>
                <Nav.Link target="_blank" href={url}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={title}
                    width="500px"
                    height="500px"
                  />
                  <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{storyline}</p>
                  </Carousel.Caption>
                </Nav.Link>
              </Nav.Item>
            </Carousel.Item>
        )}
      </Carousel>
    </Container>
  );
}
  
export default MyProjects;
