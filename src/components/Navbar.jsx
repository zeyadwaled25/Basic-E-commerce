import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '60px'}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              E-commerce App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
