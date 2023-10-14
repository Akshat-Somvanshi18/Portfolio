import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark ps-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark ps-3"
                  href="#experience-section"
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark ps-3"
                  to="/Resume"
                  id="resume"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark ps-3" href="#project-section">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark ps-3" to="/Contact">
                  Contact Me
                </Link>
              </li>

              <li className="nav-item">
                <a href="#form-section">
                  <button type="button" className="btn btn-outline-danger ms-3">
                    Hire Me
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
