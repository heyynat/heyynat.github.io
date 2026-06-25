import { Container, ProgressBar } from 'react-bootstrap';
import { softSkills } from '../services/config';

function SoftSkills() {
  return (
    <Container className="container-fluid text-center">
      {softSkills.map(({ skill, progress }) => (
        <div key={skill} className="mb-3">
          <p className="lead mb-1 text-white">{skill}</p>
          <ProgressBar animated now={progress} />
        </div>
      ))}
    </Container>
  );
}

export default SoftSkills;
