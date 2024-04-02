import React from 'react';
import { Container } from 'react-bootstrap';
import { hardSkills } from '../services/config';
import {ProgressBar} from 'react-bootstrap';

const HardSkills = () => {
    return (
        <Container className="container-fluid text-center">
            {hardSkills.map(({skill, progress}, index) => {
                return (
                    <p key={index} className="lead mb-1 mt-2 text-white">{skill}
                      <ProgressBar animated now={progress} />
                    </p>
                )
            })}
        </Container>
    );
};

export default HardSkills;
