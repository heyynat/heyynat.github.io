import { Container, Image, Nav } from 'react-bootstrap';
import { useState } from 'react';
import HardSkills from '../components/HardSkills';
import SoftSkills from '../components/SoftSkills';
import { profileImage, resumeAbout } from '../services/config';

function About() {
  const [skill, setSkill] = useState('soft');

  return (
    <Container
      id="about"
      className="container-fluid text-center justify-content-center align-items-center"
    >
      <h1 className="display-6 my-5">
        <mark className="text-white" style={{ backgroundColor: '#42113C' }}>
          Sobre
        </mark>
      </h1>
      <Image src={profileImage} width="150" roundedCircle alt="Natali Lima" />
      <p className="text-white my-3">{resumeAbout}</p>
      <Nav
        className="justify-content-center my-2"
        activeKey={skill}
        onSelect={(selectedKey) => setSkill(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="hard">Hard Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="soft">Soft Skills</Nav.Link>
        </Nav.Item>
      </Nav>
      {skill === 'soft' ? <SoftSkills /> : <HardSkills />}
    </Container>
  );
}

export default About;
