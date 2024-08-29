import React from 'react'

export const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary px-md-5 px-3 py-5 bg-white">
    <div className="container-fluid">
        <span className="navbar-brand navbar-text-name">मुकुल खत्री</span>
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
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto fs-4">
                <li className="nav-item">
                    <a className="nav-link" href='#aboutSection' aria-current="page">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#projectSection'>Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#contactSection'>Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#serviceSection'>Skills</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}
