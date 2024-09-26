import React from 'react'
import Hero from '../components/LandingPage/Hero'
import Companies from '../components/LandingPage/Companies'
import JobCategory from '../components/LandingPage/JobCategory'
import Working from '../components/LandingPage/Working'
import Testimonials from '../components/LandingPage/Testimonials'
import Subscribe from '../components/LandingPage/Subscribe'

const Home = () => {
  return (
    <React.Fragment>
        <Hero />
        <Companies />
        <JobCategory />
        <Working />
        <Testimonials />
        <Subscribe />
      </React.Fragment>
  )
}

export default Home