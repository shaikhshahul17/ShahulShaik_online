import { useEffect, useState } from "react";
import { profile } from "../data/portfolio.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    const el = document.getElementById("mainNav");
    if (el && el.classList.contains("show")) {
      el.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top site-nav ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand brand" href="#home">
          SHAHUL
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href} onClick={closeMenu}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-dark-pill"
            onClick={closeMenu}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
