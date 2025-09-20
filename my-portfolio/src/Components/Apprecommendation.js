import React from 'react'
import { NavLink } from 'react-router-dom'

export const Apprecommendation = () => {
  return (
<>
  <div className='back-option-wrapper px-5 pt-5'>
    <NavLink 
            to="/" 
            className="text-decoration-none d-flex"
            style={{ color: "inherit" }} // prevents default blue link color
    >
      <span className='back-option fs-3'>
        <span className='mb-1'>←</span>
      </span>
    </NavLink>
  </div>
  <div className='p-5'>
    <h2 className='text-center text-decoration-underline'>App Recommendation</h2>
    <div  className='col'>
      <div className='col-md-8 col-12 pt-5'>
        <h4>Project Description</h4>
        <p className='mb-4 fs-5'>This project focuses on analysing mobile app data from the Apple App Store and Google Play Store. As a product analyst for a company that develops Android and iOS apps, our goal is to identify the types of apps most likely attract a large number of users.</p>
        <h4>Business Requirements</h4>
        <p className='mb-4 fs-5'>We only build apps that are free to download and install, our revenue comes from the in-app advertisements, the more users who see and engage with the ads, the better.</p>
        <h4>Project Goals</h4>
        <p className='mb-4 fs-5'>Goal of this project is to analyze the data to help our developers understand what types of apps are likely to attract more users.</p>
      </div>
    </div>
  </div>
    {/* <ol>
      <li>Add description of the script</li>
      <li>
        Data Cleaning - 
        <ul>
          <li>Explored the data</li>
          <li>Deleted the wrong data</li>
          <li>Removed duplicate entries and kept the most relevant row</li>
          <li>As per the business need removed the non-english apps and non-free apps</li>
        </ul>
      </li>
      <li>
        Started the Analysis:
        
      </li>
    </ol>
    <iframe
        src="https://nbviewer.org/github/mukul-pixel/app_recommendation_analysis/blob/main/Basics.ipynb?flush_cache=true"
        width="100%"
        height="900"
        style={{ border: "none" }}
        title="App Recommendation Analysis Notebook"
        className='p-2'
    /> */}

</>
  )
}
