import React from 'react'

export const Qualifications = () => {
    const education = [{
        school:"JECRC University",
        program:"BTECH CSE",
        timePeriod:"2020-2024"
    },{
        school:"Kendriya Vidyalaya - Uttarlai(AFS)",
        program:"12th",
        timePeriod:"2019-2020"
    },{
        school:"The Modern School",
        program:"10th",
        timePeriod:"2017-2018"
    }];

    const experience = [{
        company:"Blinkit",
        role:"Data Analyst Intern",
        timePeriod:"May2024-Present"
    },{
        company:"Netparam Technologies",
        role:"Full Stack Intern",
        timePeriod:"Feb2024-May2024"
    }]
  return (
    <>
    <div className='row px-md-5 px-2 py-5 my-5'>
        <div className='col-md-6 col-12'>
            <div className='qualification-type-container row'>
                <h2 className='qualification-type p-3 col-10'>📚  &nbsp;Education</h2>
            </div>
            <ul className='list-unstyled'>
            {education.map((qualification, index) => (
                        <li key={index} className='qualification-list-container py-3 mb-2'>
                            <div className='list-heading-wrapper mb-2 px-4'>
                                <div className='list-heading-text fs-4'>{qualification.school}</div>
                            </div>
                            <div className='list-sub-heading-wrapper d-flex flex-row px-4'>
                                <div className='list-sub-heading-text' style={{fontSize: "16px"}}>
                                    {qualification.program}
                                </div>
                                <div className='list-sub-heading-time-period ms-auto' style={{fontSize: "16px"}}>
                                    {qualification.timePeriod}
                                </div>
                            </div>
                        </li>
                    ))} 
            </ul>
        </div>
        <div className='col-md-6 col-12'>
            <div className='qualification-type-container'>
                <h3 className='qualification-type p-3'>💼 &nbsp;Work Experience</h3>
            </div>
            <ul className='list-unstyled'>
            {experience.map((qualification, index) => (
                        <li key={index} className='qualification-list-container py-3 mb-2'>
                            <div className='list-heading-wrapper mb-2 px-4'>
                                <div className='list-heading-text fs-4'>{qualification.company}</div>
                            </div>
                            <div className='list-sub-heading-wrapper d-flex flex-row px-4'>
                                <div className='list-sub-heading-text' style={{fontSize: "16px"}}>
                                    {qualification.role}
                                </div>
                                <div className='list-sub-heading-time-period ms-auto' style={{fontSize: "16px"}}>
                                    {qualification.timePeriod}
                                </div>
                            </div>
                        </li>
                    ))} 
            </ul>
        </div>
    </div>
    </>
  )
}
