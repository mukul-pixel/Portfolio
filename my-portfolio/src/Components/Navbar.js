import React from 'react'
import homeImage from "../assets/portfolio_logo.png";

export const Navbar = () => {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-custom sticky-top px-md-5 px-3 py-3">
    <div className="container-fluid">
      {/* Logo */}
      <a
        href="https://mukulkhatri.vercel.app/"
        className="navbar-brand d-flex align-items-center"
      >
        <img src={homeImage} alt="Mukul Khatri" className="navbar-logo" />
      </a>

      {/* Mobile toggle */}
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

      {/* Nav links */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          <li className="nav-item">
            <a className="nav-link" href="#about-section">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work-section">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#project-section">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skill-section">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactSection">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
  )
}
