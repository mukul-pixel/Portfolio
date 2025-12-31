import React from 'react'
import { Displaycard } from './utils/Displaycard'
import { NavLink } from 'react-router-dom'
import warehouseImage from '../assets/1.png';
import roleAndResponsibility from '../assets/2.png';

export const Workexperience = () => {
  return (
    <>
    <div id = "work-section" className='text-center'>
        <h3 className='mb-5'>Work Experience</h3>
    </div>
    <div className='row mb-5 gap-md-0 gap-3'>
    <div className='col-12 col-md-6'>
      <NavLink 
        to="/warehouse-gamification" 
        className="text-decoration-none"
        style={{ color: "inherit" }} // prevents default blue link color
      >
        <Displaycard
         title="Warehouse Gamification" 
         description="With Blinkit's growing customer base, warehouse demand increased, leading to higher hiring costs and management challenges. Driving user productivity became a priority."
         image= {warehouseImage}
    />
    </NavLink>
    </div>
    <div className='col-12 col-md-6'>
    <NavLink 
        to="/role-and-responsibility" 
        className="text-decoration-none"
        style={{ color: "inherit" }} // prevents default blue link color
      >
        <Displaycard
            title="Roles and Responsibilities"
            description="Insights into my role, responsibilities, and day-to-day impact at Blinkit."
            image={roleAndResponsibility}
        />
    </NavLink>
    </div>
    </div>
    </>
  )
}
