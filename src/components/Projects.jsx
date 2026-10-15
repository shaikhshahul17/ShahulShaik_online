import { projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects I'm" accent="proud of" />
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <article className="project-card h-100">
                <div className={`project-thumb thumb-${i % 3}`}>
                  <i className={`bi ${p.icon}`}></i>
                </div>
                <div className="p-4 d-flex flex-column h-100">
                  <h3 className="card-title-sm">{p.title}</h3>
                  <p className="text-muted flex-grow-1">{p.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow"
                  >
                    View on GitHub <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
