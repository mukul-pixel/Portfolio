import React, { useState } from "react";
import homeImage from "../assets/portfolio_logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(prev => !prev);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top px-md-5 px-3 py-3">
      <div className="container-fluid">
        {/* Logo */}
        <a
          href="https://mukulkhatri.vercel.app/"
          className="navbar-brand d-flex align-items-center p-0"
          onClick={closeNavbar}
        >
          <img src={homeImage} alt="Mukul Khatri" className="navbar-logo" />
        </a>

        {/* Mobile toggle (pure React control, no nested buttons) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            // close icon (span, NOT a button)
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                lineHeight: 1,
                cursor: "pointer",
                display: "inline-block",
                padding: "2px 6px"
              }}
            >
              ✕
            </span>
          ) : (
            // default bootstrap hamburger icon (works with bootstrap CSS)
            <span className="navbar-toggler-icon" />
          )}
        </button>

        {/* Collapse controlled by React state */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#about-section" onClick={closeNavbar}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#work-section" onClick={closeNavbar}>
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#project-section" onClick={closeNavbar}>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skill-section" onClick={closeNavbar}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contactSection" onClick={closeNavbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
