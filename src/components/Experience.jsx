import { experience } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="EXPERIENCE" title="Where I've" accent="worked" />
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.role + job.period}>
              <span className="timeline-dot"></span>
              <div className="card-soft">
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                  <div>
                    <h3 className="card-title-sm mb-1">{job.role}</h3>
                    <p className="text-muted mb-0">{job.company}</p>
                  </div>
                  <span className="chip chip-accent">{job.period}</span>
                </div>
                <ul className="mt-3 mb-0 ps-3 exp-list">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
