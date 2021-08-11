import React from 'react';
import Typist from "react-typist";
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
      <Container className="container-fluid text-center">
        <br /><br /><br />
        <h1 className='display-2'>Natali  <mark style={{backgroundColor: "#ccff33"}}>Lima</mark></h1>
        <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            <p>Apaixonada por tecnologia</p>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/heyynat">
                <span class='devicon-github-original' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/heyynat/">
              <span class='devicon-linkedin-plain' />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Typist>
        <Link class="btn btn-outline-dark btn-lg" to="/about">Sobre mim</Link>
      </Container>
    )
}

export default Profile;
