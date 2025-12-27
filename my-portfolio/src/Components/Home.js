import React from 'react'
import { Navbar } from './Navbar'
// import { About } from './About'
// import { Qualifications } from './Qualifications'
// import { Services } from './Services'
// import { Projects } from './Projects'
import { Contact } from './Contact'
import { Workexperience } from './Workexperience'
import { Selectedprojects } from './Selectedprojects'
import { Journey } from './Journey'
import { Skills } from './Skills'
import heroImage from "../assets/IMG_0213.jpeg";

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='px-md-5 px-0'>
    <div className="hero-section container my-5">
  <div className="row pt-5 py-5">

    {/* Left content */}
    <div className="col-md-6 col-12 py-5 my-5 px-md-5 px-3">
      <h2 className="heading-text py-3">Hi! I'm Mukul Khatri</h2>
      <h3>Aspiring Product Manager</h3>
      <h4 className="fs-4">
        Experienced in building, analyzing, and managing products from 0 → 1.
      </h4>

      <a
        href="https://drive.google.com/file/d/1EvbHg9AlIzuolMpedWIbM2Uc3j9k3n1f/view?usp=sharing"
        className="resume-button text-decoration-none fw-bold"
      >
        <button
          type="button"
          className="btn text-white my-3 fw-bold mb-4"
        >
          RESUME
        </button>
      </a>
    </div>
      {/* Right image */}
      <div className="col-md-6 col-12 text-center py-md-5 py-0 my-md-2 mb-5 mb-md-0">
        <img
          src={heroImage}
          alt="Mukul Khatri"
          className="hero-image"
        />
      </div>
    </div>
      <Workexperience />
      <Selectedprojects />
      <Journey />
      <Skills />
    </div>
    </div>
    <Contact/>
    </>
  )
}
