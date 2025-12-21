import React from 'react'
import InfiniteSkillsCarousel from './utils/Carousel'

export const Skills = () => {
  return (
    <>
    <div id = "skill-section"className='text-center'>
        <h3 className='skill-heading-text p-4'>Skills</h3>
        <InfiniteSkillsCarousel/>
    </div>
    </>
  )
}
