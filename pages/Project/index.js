import React from 'react'
import { PortfolioBody } from '../components/homepage/PortfolioBody'
import { PortfolioIntro } from '../components/homepage/PortfolioIntro'

const Project = () => {
  return (
    <>
    <div className='px-16'>
        <PortfolioIntro />
        <PortfolioBody />
    </div>
    </>
  )
}

export default Project