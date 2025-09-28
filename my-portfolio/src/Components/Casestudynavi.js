import React from 'react'
import { NavLink } from 'react-router-dom'
import naviHeroImage from '../assets/Navi Hero image.png';

export const Casestudynavi = () => {
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
        <h2 className='text-center text-decoration-underline'>Navi India</h2>
        <h4 className='text-decoration-underline py-2'>About</h4>
        <div className='row about-section-wrapper gap-md-5'>
            <div className='about-section col-md-4 col-12 fs-5 py-3 me-md-5'>
                Navi is a fintech app offering instant personal loans, health insurance, UPI transfers, bill payments and mutual funds.<br/>
                Founded by Sachin Bansal in 2020, it targets India’s growing digital population with the promise of <span className='fw-bold'>“simple, affordable, accessible financial services.”</span>
                <br/>
                <br/>
                ​​In FY24, Navi reported ≈ ₹1,906.2 crore in standalone operating revenue (and ≈ ₹2,812 crore on a consolidated basis) across its financial services operations.

            </div>
            <div className='about-section-img col-md-7 col-12'>
                <img 
                    className='navi-hero-img w-auto'
                    src={naviHeroImage}
                    alt='navi_hero_img'
                    style={{ height: "500px", objectFit: "cover" }}
                    />
            </div>
        </div>
    </div>
    </>
  )
}
