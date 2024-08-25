import React from 'react'
import { Navbar } from './Navbar'
import { About } from './About'
import { Qualifications } from './Qualifications'
import { Services } from './Services'
import { Projects } from './Projects'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='hero-section row pt-5 px-md-5 px-3 py-5 my-5'>
        <div className='col-md-6 col-12 py-5 my-5'>
            <h1 className='heading-text py-3'>Hi! I'm Mukul Khatri</h1>
            <p className='py-3 fs-3'>Passionate Developer from India. I specialize in full-stack development, building scalable and user-friendly web applications. Combining technical expertise with creativity, to bring ideas to life and help businesses thrive.</p>
            <a href='https://drive.google.com/file/d/1S-whOa-a7Mmc5OZFofcCZmZ35G8GhB8Q/view?usp=drive_link' className='resume-button text-decoration-none fw-bold'>
            <button type='button' className='btn btn-dark fw-bold'>
              RESUME
              </button>
              </a>
        </div>
        <div className='col-md-6 col-12 py-5 my-4 text-center'>
        <img 
        src='https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?size=626&ext=jpg&uid=R160301206&ga=GA1.1.667835301.1724482982&semt=ais_hybrid' 
        style={{
            imageOrientation: "from-image",
            width: "90vw",
            maxWidth: "500px"
        }} 
        alt='mukulImage'
    />
      </div>
    </div>

    <About/>
    <Qualifications/>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  )
}
