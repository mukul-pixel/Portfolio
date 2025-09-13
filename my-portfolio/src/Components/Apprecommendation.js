import React from 'react'

export const Apprecommendation = () => {
  return (
    <>
    <h2 className='text-align-center'>Apprecommendation</h2>
    <iframe
        src="https://mybinder.org/v2/gh/mukul-pixel/app_recommendation_analysis/HEAD"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="App Recommendation Analysis Notebook"
    />
    </>
  )
}
