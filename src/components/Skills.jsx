import { skills } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="TECHNICAL SKILLS" title="Tools I" accent="build with" />
        <div className="row g-4">
          {skills.map((group) => (
            <div className="col-md-6 col-lg-4" key={group.title}>
              <div className="card-soft h-100">
                <div className="icon-circle">
                  <i className={`bi ${group.icon}`}></i>
                </div>
                <h3 className="card-title-sm">{group.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
