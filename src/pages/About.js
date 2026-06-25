import { Container } from 'react-bootstrap';
import {
  mainStack,
  resumeAbout,
  specialties,
} from '../services/config';

function About() {
  return (
    <section id="about" className="section-block section-block--alt">
      <Container>
        <h2 className="section-title">Sobre</h2>
        {resumeAbout.map((paragraph, index) => (
          <p key={index} className="about-text">
            {paragraph}
          </p>
        ))}

        <div className="about-subsection">
          <h2 className="section-title">Principais especialidades</h2>
          <ul className="specialties-list">
            {specialties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-subsection">
          <h2 className="section-title">Stack principal</h2>
          <div className="skill-tags">
            {mainStack.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
