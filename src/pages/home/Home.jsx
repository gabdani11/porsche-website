import React from 'react'
import Hero from '../../sections/hero/Hero.jsx'
import About from '../../sections/about/About.jsx'
import Specification from '../../sections/specification/Specification.jsx'
import VideoSection from '../../sections/videoSection/VideoSection.jsx'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Specification/>
    <VideoSection/>
    </>
  )
}

export default Home