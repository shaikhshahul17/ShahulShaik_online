import { useState } from "react";
import { profile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import coverImg from "../assets/cover-web.jpg";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Opens the visitor's mail app with the message pre-filled (no backend needed).
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
  //   const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
  //   window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  // };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* <div className="cover-banner mb-5" style={{ backgroundImage: `url(${coverImg})` }}>
          <div className="cover-overlay">
            <p className="eyebrow text-white-50">LET'S WORK TOGETHER</p>
            <h2 className="section-title text-white mb-0">
              Have a project in mind?
            </h2>
          </div>
        </div> */}

        <div className="row g-4">
          <div className="col-lg-5">
            <SectionHeading eyebrow="CONTACT" title="Get in" accent="touch" />
            <ul className="list-unstyled contact-list">
              <li>
                <i className="bi bi-envelope"></i>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                <a href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <i className="bi bi-github"></i>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="cover-banner mb-5" style={{ backgroundImage: `url(${coverImg})` }}>
          <div className="cover-overlay">
            <p className="eyebrow text-white-50"><h2>LET'S WORK TOGETHER</h2></p>
            {/* <h2 className="section-title text-white mb-0">
              Have a project in mind?
            </h2> */}
          </div>
        </div>
          </div>
          {/* <div className="col-lg-7">
            <form className="card-soft" onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" className="form-control" required value={form.name} onChange={onChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-control" required value={form.email} onChange={onChange} />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" className="form-control" required value={form.message} onChange={onChange}></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark-pill btn-lg">
                    Send message <i className="bi bi-send ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
