import React from 'react'
import { Displaycard } from './utils/Displaycard'
import { NavLink } from 'react-router-dom'

export const Selectedprojects = () => {
  return (
    <>
    <div id = "project-section" className='text-center'>
        <h3 className='mb-5'>Selected Projects</h3>
    </div>
        <div className='row mb-3'>
        <div className='col-12 col-md-6'>
        <NavLink 
                to="/app-recommendation-analysis" 
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                <Displaycard
                 title="App Recommendation Analysis"
                 description="Data analysis to recommend a free app genre to increase revenue of the organisation"
                 image="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?size=626&ext=jpg&uid=R160301206&ga=GA1.1.667835301.1724482982&semt=ais_hybrid"
            />
        </NavLink>
        </div>
        <div className='col-12 col-md-6'>
          <NavLink 
                to="/product-teardown-navi"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
               <Displaycard
                    title="Product Teardown - Navi"
                    description="An app that lets users buy art frames designed to evoke emotions."
                    image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
               />
          </NavLink>
        </div>
        </div>
            <div className='row mb-5'>
            <div className='col-12 col-md-6'>
            <NavLink 
                to="/mixpanel-analysis"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
            <Displaycard
                 title="Whoop - Product Analysis using Mixpanel"
                 description="Everything from dashboard to insights - retention, revenue, user satisfaction"
                 image="https://framerusercontent.com/assets/KHyJwfBzTDm8CBtgWokK94nAuQ.png"
            />
            </NavLink>
            </div>
            <div className='col-12 col-md-6'>
            <NavLink 
                to="/product-teardown"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
            <Displaycard
                 title="Product Teardown"
                 description="Product Teardown of any AI app"
                 image="https://hellopm.co/wp-content/uploads/2023/09/1693110231021.jpeg"
            />
            </NavLink>
            </div>
            </div>
    </>
  )
}
