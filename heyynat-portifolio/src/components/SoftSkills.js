import React from 'react';
import { Container } from 'react-bootstrap';
import { softSkills } from '../services/config';

const SoftSkills = () => {
    return (
        <Container className="container-fluid text-center">
            <h2>Soft Skills</h2>
            {softSkills.map(({skill, progress}, index) => (
                    <p key={index}>{skill}
                    <progress className="progress is-small" value={progress} max="100"/>
                    </p>
            ))}
        </Container>
    );
};

export default SoftSkills;
