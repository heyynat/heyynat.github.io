import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import HardSkills from '../components/HardSkills';
import SoftSkills from '../components/SoftSkills';

const About = () => {
    const [ skill, setSkill ] = useState('soft')

    return (
        <Container className="container-fluid text-center">
            <div>
                <p>
                    Sou apaixonada por Tecnologia, desenvolvimento web e marcas que entregam
                    com soluções inovadoras e ágeis gerando valor para negócios e transformações no mundo digital.
                    Estudo Desenvolvimento Web na Trybe, uma escola que ensina a programar, a aprender e a trabalhar.
                    Trabalho e acredito em ações que possam gerar um impacto e simplificar a vida das pessoas.
                </p>
            </div>
          <br /><br /><br />

            <Nav className="justify-content-center"
                activeKey="/home"
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
    )
}

export default About;
