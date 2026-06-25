import { profile, profileHero } from '../services/config';
import './Profile.css';

function Profile() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-portrait">
          <img
            className="hero-portrait-image"
            src={profileHero}
            alt={`${profile.name}, ${profile.title}`}
            width="320"
            height="400"
            fetchPriority="high"
          />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">{profile.location}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="hero-links-sep" aria-hidden="true">
              ·
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="hero-links-sep" aria-hidden="true">
              ·
            </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
