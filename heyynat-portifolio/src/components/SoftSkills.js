import React from 'react';
import { Container } from 'react-bootstrap';
import { softSkills } from '../services/config';
import {ProgressBar} from 'react-bootstrap';

const SoftSkills = () => {
    return (
        <Container className="container-fluid text-center">
            {softSkills.map(({skill, progress}, index) => (
                <>
                    <p key={index} className="lead mb-1 mt-2 text-white">{skill}</p>
                    <ProgressBar animated now={progress} />
                </>
            ))}
        </Container>
    );
};

export default SoftSkills;
