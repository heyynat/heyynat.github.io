import React from 'react';
import { Container } from 'react-bootstrap';
import { hardSkills } from '../services/config';

const HardSkills = () => {
    return (
        <Container className="container-fluid text-center">
            <h2>Hard Skills</h2>
            {hardSkills.map(({skill, progress}, index) => {
                return (
                    <p key={index}>{skill}
                    <progress className="progress is-small" value={progress} max="100"/>
                    </p>
                )
            })}
        </Container>
    );
};

export default HardSkills;
