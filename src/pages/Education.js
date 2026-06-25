import { Container } from 'react-bootstrap';
import { education } from '../services/config';

function Education() {
  return (
    <section id="education" className="section-block section-block--alt">
      <Container>
        <h2 className="section-title">Formação</h2>
        <div className="education-list">
          {education.map((item) => (
            <div key={item.degree} className="education-item">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">
                {item.institution} · {item.period}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
