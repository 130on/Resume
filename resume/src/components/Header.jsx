// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky-top">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
<Link className="navbar-brand" to="/">Alon Saar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/alon-saar-734087201/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/130on" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
