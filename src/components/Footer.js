import { Container } from 'react-bootstrap';
import { business, profile } from '../services/config';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-inner">
          <p className="site-footer-brand">
            <span className="site-footer-name">{profile.name}</span>
            <span className="site-footer-role">{profile.title}</span>
          </p>
          <nav className="site-footer-nav" aria-label="Contato">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>E-mail</a>
          </nav>
          <p className="site-footer-copy">
            © {year} {profile.name} · {business.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
