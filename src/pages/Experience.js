import { Container } from 'react-bootstrap';
import { experience } from '../services/config';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="section-block">
      <Container>
        <h2 className="section-title">Experiência</h2>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.id} className="experience-card">
              <header className="experience-header">
                <div>
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <div className="experience-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
              </header>
              <ul className="experience-highlights">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="skill-tags">
                {job.technologies.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
