import React from 'react';
import Typist from "react-typist";
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
      <Container className="my-5 text-center justify-content-center align-items-center">
          <Typist cursor={{show: false}} className="text-white" show={false} > <h1 className='display-2 text-white my-2'>Natali <mark style={{backgroundColor: "#ccff33"}}>Lima</mark></h1></Typist>
          <br /><br /><br />
          <Typist cursor={{hideWhenDoneDelay: 1000}} className="lead typist text-white">
          <p>Apaixonada por tecnologia</p>
            <Typist.Delay ms={500} />
            {" "}
            Web developer
          </Typist>
            <div className="display-4 my-5">
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link target="_blank" href="https://github.com/heyynat">
                    <span class='text-white devicon-github-original' />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link target="_blank" href="https://www.linkedin.com/in/heyynat/">
                  <span class='text-white devicon-linkedin-plain' />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
        <Link class=" btn btn-outline-light" to="/about">Sobre mim</Link>
        <br /><br /><br />
      </Container>
    )
}

export default Profile;
