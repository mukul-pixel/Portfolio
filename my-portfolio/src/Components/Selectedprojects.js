import React from 'react'
import { Displaycard } from './utils/Displaycard'
import { NavLink } from 'react-router-dom'
import whoopThumbNail from '../assets/6.png';
import naviThumbNail from '../assets/4.png';
import recommendationThumbNail from '../assets/3.png';

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
                 description="Everything from dashboard to insights - retention, revenue, user satisfaction"
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
                    description="An app that lets users buy art frames designed to evoke emotions."
                    image={naviThumbNail}
               />
          </NavLink>
        </div>
        </div>
            <div className='row mb-5 gap-md-0 gap-3 text-center px-2'>
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
                    image="https://media.licdn.com/dms/image/v2/D4E12AQG5ayANUj57yw/article-cover_image-shrink_600_2000/B4EZZdGsJzHQAU-/0/1745318757572?e=2147483647&v=beta&t=pvwV0xEaceEdMSUbwnbZQL1S1Bjsf6aYyzLBHy1F4es"
                />

                {/* Full card overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                }}>
                  Coming Soon
                </div>
              </NavLink>
            </div>
            </div>
    </>
  )
}
