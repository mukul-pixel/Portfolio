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

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='px-md-5 px-0'>
    <div className='hero-section row pt-5 px-md-5 px-3 py-5 my-5'>
        <div className='col-md-6 col-12 py-5 my-5'>
            <h2 className='heading-text py-3'>Hi! I'm Mukul Khatri</h2>
            <h3>Aspiring Product Manager</h3>
            <h4 className='fs-4'>Experienced in building, analyzing, and managing products from 0 → 1.</h4>
            <a href='https://drive.google.com/file/d/1EvbHg9AlIzuolMpedWIbM2Uc3j9k3n1f/view?usp=sharing' className='resume-button text-decoration-none fw-bold'>
            <button type='button' className='btn btn-dark fw-bold my-3'>
              RESUME
              </button>
              </a>
        </div>
        <div className='col-md-6 col-12 py-5 my-4 text-center'>
        <img 
        src='' 
        style={{
            imageOrientation: "from-image",
            width: "90vw",
            maxWidth: "500px"
        }} 
        alt='mukulImage'
    />
      </div>
    <Workexperience/>
    <Selectedprojects/>
    <Journey/>
    <Skills/>
    </div>
    </div>
    <Contact/>
    </>
  )
}
