import { about, profile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import formalImg from "../assets/formal.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="photo-card">
              <img src={formalImg} alt={profile.name} />
            </div>
          </div>
          <div className="col-lg-7">
            <SectionHeading eyebrow="ABOUT ME" title="Developer, mentor," />
            <p className="lead-muted">{about.summary}</p>
            <div className="row g-3 mt-3">
              {about.stats.map((s) => (
                <div className="col-6 col-md-3" key={s.label}>
                  <div className="stat-card">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="list-unstyled mt-4 mb-0 contact-mini">
              <li><i className="bi bi-geo-alt me-2"></i>{profile.location}</li>
              <li><i className="bi bi-envelope me-2"></i>{profile.email}</li>
              <li><i className="bi bi-telephone me-2"></i>{profile.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
