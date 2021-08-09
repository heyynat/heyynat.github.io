import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { projects } from  '../services/config'

const MyProjects = () => {
  return (
    <Container className="container-fluid text-center">

      <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="First slide"
              width="500px"
              height="500px"
            />
            <Carousel.Caption>
              <h3>Project Movie Card Library CRUD</h3>
              <p>um CRUD de cartões de filmes em React.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
              alt="Second slide"
              width="500px"
              height="500px"
            />
            <Carousel.Caption>
              <h3>Project Shopping Cart</h3>
              <p>carrinho de compras totalmente dinâmico!.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1602532262454-d18bf4c4e0af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
              alt="Third slide"
              width="500px"
              height="500px"
            />
            <Carousel.Caption>
              <h3>Project Pixels Art</h3>
              <p>Uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </Container>
  )
}
  
  export default MyProjects;
  
  // <Carousel>
  //   {projects.map(({title, storyline, url}, period) => (
  //     <Carousel.Item interval={period}>
  //       <img
  //         className="d-block w-100"
  //         src={url}
  //         alt={title}
  //         />
  //       <Carousel.Caption>
  //         <h3>{title}</h3>
  //         <p>{storyline}</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   ))}
  // </Carousel>