import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg custom-nav px-4 py-2">
        <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
          Alon Saar
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto">
            {[
              { to: '/resume', label: 'Resume' },
              { to: '/education', label: 'Education' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }, i) => (
              <li key={i} className="nav-item">
                <Link className="nav-link custom-nav-link" to={to}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="http://www.linkedin.com/in/alon-saar" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="https://github.com/130on" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
