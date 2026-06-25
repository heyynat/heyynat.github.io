import { profileImage } from '../services/config';
import './Profile.css';

function Profile() {
  return (
    <main className="main-profile">
      <section className="section-profile-right">
        <img src={profileImage} alt="Natali Lima" width="200" height="200" />
      </section>
      <section className="section-profile-left">
        <h1>Natali Lima</h1>
        <p>
          <strong>Desenvolvedora Web Full Stack</strong>
        </p>
        <div className="display-4 my-5">
          <aside className="profile-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/heyynat"
              aria-label="GitHub"
            >
              <span className="text-white devicon-github-original" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/heyynat/"
              aria-label="LinkedIn"
            >
              <span className="text-white devicon-linkedin-plain" />
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Profile;
