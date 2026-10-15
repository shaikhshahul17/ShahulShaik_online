import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="brand">SHAHUL</span>
        <small className="text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Bootstrap.
        </small>
      </div>
    </footer>
  );
}
