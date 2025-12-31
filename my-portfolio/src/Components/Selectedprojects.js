import React from 'react'
import { Displaycard } from './utils/Displaycard'
import { NavLink } from 'react-router-dom'
import whoopThumbNail from '../assets/6.png';
import naviThumbNail from '../assets/4.png';
import recommendationThumbNail from '../assets/3.png';
import teardownThumbNail from '../assets/7.png';

export const Selectedprojects = () => {
  return (
    <>
    <div id = "project-section" className='text-center'>
        <h3 className='mb-5'>Selected Projects</h3>
    </div>
        <div className='row mb-3 gap-md-0 gap-3'>
        <div className='col-12 col-md-6'>
          <NavLink 
                to="/mixpanel-analysis"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
            <Displaycard
                 title="Whoop - Product Analysis using Mixpanel"
                 description="Mixpanel analysis identifying retention gaps, anomalies, and growth opportunities."
                 image= {whoopThumbNail}
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
                    description="A business and product case study covering UX, growth, and monetization."
                    image={naviThumbNail}
               />
          </NavLink>
        </div>
        </div>
          <div className='row mb-5 gap-md-0 gap-3'>
            <div className='col-12 col-md-6'>
            <NavLink 
                to="/app-recommendation-analysis" 
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                <Displaycard
                 title="App Recommendation Analysis"
                 description="Data analysis to recommend a free app genre to increase revenue of the organisation"
                 image={recommendationThumbNail}
            />
            </NavLink>
            </div>
            <div className='col-12 col-md-6 position-relative'>
              <NavLink 
                  to=""
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
              >
                <Displaycard
                    title="Product Teardown"
                    description="Product Teardown of any AI app"
                    image={teardownThumbNail}
                />
              </NavLink>
            </div>
            </div>
    </>
  )
}
