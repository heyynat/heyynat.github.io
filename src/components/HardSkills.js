import { Container, ProgressBar } from 'react-bootstrap';
import { hardSkills } from '../services/config';

function HardSkills() {
  return (
    <Container className="container-fluid text-center">
      {hardSkills.map(({ skill, progress }) => (
        <div key={skill} className="mb-3">
          <p className="lead mb-1 text-white">{skill}</p>
          <ProgressBar animated now={progress} />
        </div>
      ))}
    </Container>
  );
}

export default HardSkills;
