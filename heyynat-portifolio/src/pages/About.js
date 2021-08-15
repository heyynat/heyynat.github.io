import React, { useState } from 'react';
import { Container, Nav, Col, Image } from 'react-bootstrap';
import HardSkills from '../components/HardSkills';
import SoftSkills from '../components/SoftSkills';

const About = () => {
    const [ skill, setSkill ] = useState('soft')

    return (
        <Container className="container-fluid text-center justify-content-center align-items-center">
        <br /><br />
                <h1 className='display-6'><mark className='text-white' style={{backgroundColor: "#42113C"}}>Sobre</mark></h1>
                <br />
                <Image src="https://avatars.githubusercontent.com/u/54861311?v=4" width="150px" roundedCircle />
            <p className='text-white'>
                Sou apaixonada por Tecnologia, desenvolvimento web e marcas que entregam
                com soluções inovadoras e ágeis gerando valor para negócios e transformações no mundo digital.
                Estudo Desenvolvimento Web na Trybe, uma escola que ensina a programar, a aprender e a trabalhar.
                Trabalho e acredito em ações que possam gerar um impacto e simplificar a vida das pessoas.
            </p>
            <br />

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
            <br />
        </Container>
    )
}

export default About;
