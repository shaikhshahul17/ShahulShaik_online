import { education, certifications } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading eyebrow="EDUCATION" title="Learning &" accent="certifications" />
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card-soft h-100">
              <h3 className="card-title-sm mb-4">
                <i className="bi bi-mortarboard me-2 accent"></i>Education
              </h3>
              {education.map((e) => (
                <div className="edu-row" key={e.title}>
                  <div>
                    <div className="fw-semibold">{e.title}</div>
                    <div className="text-muted small">{e.place}</div>
                  </div>
                  <span className="chip chip-accent">{e.period}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card-soft h-100">
              <h3 className="card-title-sm mb-4">
                <i className="bi bi-award me-2 accent"></i>Certifications
              </h3>
              {certifications.map((c) => (
                <div className="edu-row" key={c.title}>
                  <div>
                    <div className="fw-semibold">{c.title}</div>
                    <div className="text-muted small">{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
