import React from 'react'

export const Services = () => {
  return (
    <>
    <div className='service-content-wrapper py-5'>
    <div id='serviceSection' className='service-heading-container text-center px-md-5 px-3 py-5'>
    <h2 className='heading-text mx-auto'>
        SKILLS
    </h2>
    <div className='service-subheading-text'>
        <h1>Solutions to real-world problems, one at a time.</h1>
    </div>
    </div>
    <div className='service-list row justify-content-center px-md-5 px-3'>
    <div className='service-type-container col-md-4 col-12'>
            <div className='service-type-logo row col-3'>
                <img className='h-100 w-100' src='https://img.freepik.com/free-vector/abstract-geometric-background-with-colorful-square-shapes_1302-5257.jpg?t=st=1724484546~exp=1724488146~hmac=3f0c4c4a3a4b9b9bf040f1499fe26b7cfc828cde8e4905e4dc097658d40161b6&w=740' alt='logo1'/>
            </div>
        <div className='service-type-content-container'>
            <h4 className='sub-subheading-text pb-2'>What I can do for you</h4>
            <p className='fs-4'>Faster, better applications and websites that your users love. Here's all the services I provide:</p>
            <ul className='skills-list'>
                <li>Design Strategy</li>
                <li>Website Development</li>
            </ul>
        </div>
    </div>
    <div className='service-heading-container col-md-4 col-12'>
    <div className='service-type-logo row col-3'>
                <img className='h-100 w-100' src='https://img.freepik.com/free-photo/top-view-blue-decorative-frame_23-2148209986.jpg?t=st=1724484766~exp=1724488366~hmac=1819b417dabc2cd5e507b0403ec3d48dbad2eff8b05ca9d0314143380db6d930&w=740' alt='logo2'/>
            </div>
        <div className='service-subheading-text'>
            <h4 className='sub-subheading-text pb-2'>Languages and Frameworks I'have grip on</h4>
            <p className='fs-5'>Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</p>
            <ul className='skills-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>BootStrap</li>
                <li>React Js</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>Python</li>
                <li>Golang</li>
                <li>SQL</li>
                <li>Node js</li>
            </ul>
        </div>
    </div>
    <div className='service-heading-container col-md-4 col-12'>
    <div className='service-type-logo row col-3'>
                <img className='h-100 w-100' src='https://img.freepik.com/free-photo/top-view-blue-decorative-frame_23-2148209975.jpg?ga=GA1.1.667835301.1724482982&semt=ais_hybrid' alt='logo3'/>
            </div>
        <div className='service-subheading-text'>
            <h4 className='sub-subheading-text pb-2'>What you can expect</h4>
            <p className='fs-5'>I make products that are more than functional. I make them shippable and usable.</p>
            <ul className='skills-list'>
                <li>Clean and functional</li>
                <li>Device and user friendly</li>
                <li>Efficient and maintainable</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
