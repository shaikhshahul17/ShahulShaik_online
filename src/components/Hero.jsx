import { profile } from "../data/portfolio.js";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1 className="hero-title">
              {profile.headlineTop}
              <br />
              <span className="accent">{profile.headlineAccent}</span>
            </h1>
            <p className="lead-muted">{profile.tagline}</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn btn-dark-pill btn-lg">
                View my work
              </a>
              <a
                href={profile.resume}
                download
                className="btn btn-outline-pill btn-lg"
              >
                <i className="bi bi-download me-2"></i>Resume
              </a>
            </div>
            <div className="d-flex gap-3 mt-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href={`mailto:${profile.email}`} className="social" aria-label="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="blob-wrap">
              <img
                src={heroImg}
                alt={`${profile.name}, ${profile.role}`}
                className="blob-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
