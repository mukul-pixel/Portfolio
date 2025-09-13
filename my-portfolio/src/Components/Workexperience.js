import React from 'react'
import { Displaycard } from './utils/Displaycard'
import { NavLink } from 'react-router-dom'

export const Workexperience = () => {
  return (
    <>
    <div className='text-center'>
        <h3 className='mb-5'>Work Experience</h3>
    </div>
    <div className='row mb-5'>
    <div className='col-12 col-md-6'>
      <NavLink 
        to="/tl-app" 
        className="text-decoration-none"
        style={{ color: "inherit" }} // prevents default blue link color
      >
        <Displaycard
         title="App Recommendation Analysis"
         description="Data analysis to recommend a free app genre to increase revenue of the organisation"
         image="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?size=626&ext=jpg&uid=R160301206&ga=GA1.1.667835301.1724482982&semt=ais_hybrid"
    />
    </NavLink>
    </div>
    <div className='col-12 col-md-6'>
    <Displaycard
         title="Aura – D2C Art Frames App"
         description="An app that lets users buy art frames designed to evoke emotions."
         image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
         link="https://www.priyanshuverma.com/aura"
    />
    </div>
    </div>
    </>
  )
}
