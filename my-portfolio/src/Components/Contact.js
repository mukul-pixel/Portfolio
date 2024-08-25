import React from 'react'

export const Contact = () => {
  return (
    <>
    <div id='contactSection' className='bg-black p-3 d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
        <div className='row contact-content-wrapper py-5 px-md-5'>
            <div className='col-md-5 col-12 px-0 contact-information-container text-white'>
                <h4 className='heading-text'>CONTACT</h4>
                <h1 className='contact-subheading-text'>Get In Touch</h1>
                <span className='contact-text fs-4 my-3'>I'm eager to contribute my skills and dedication to your company. Give me the opportunity to work for you, and I promise I won't disappoint. Let's connect!</span>
                <a href="mailto:mukul8756@gmail.com" className='mail-to-mukul text-decoration-none'><h4 style={{color:'grey'}}>📧 mukul8756@gmail.com</h4></a>
                <div className='contact-links py-3'>
                    <a href='https://github.com/mukul-pixel' className='contact-link'>Github</a>
                    <a href='https://www.linkedin.com/in/mukul-khatri-619b78262/' className='contact-link'>LinkedIn</a>
                    <a href="tel:6350018762" className='contact-link'>6350018762</a>
                    <a href='https://leetcode.com/u/mukulkhatri2/' className='contact-link'>LeetCode</a>
                </div>
            </div>
            <div className='productProfile col-md-7 col-12 px-0 contact-info-display-image text-center'>
                <img src='https://res.cloudinary.com/di0ypmtwd/image/upload/v1724569522/WhatsApp_Image_2024-08-25_at_12.33.41_4005ac71_pvpwhs.jpg'
                style={{
                    height: "330px",
                    imageOrientation: "from-image",
                    width: "90vw",
                    maxWidth: "500px"
                }}
                alt='contact-info-image'></img>
            </div>
        </div>
    </div>

    </>
  )
}
