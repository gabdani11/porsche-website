import React from 'react'
import Navbar from '../../components/Navbar'
import './hero.scss'

const Hero = () => {
  return (
    <section className='heroSection'>
        <Navbar/>
        <div className="imgContainer">
          <img className='heroImg1' 
          src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_382284989.webp" alt="heroSectionImg" loading='lazy' />
          <img className='heroImg2'
          src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_382284989.webp" alt="heroSectionImg" loading='lazy' />
          <img className='heroImg3'
          src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_1606437539.webp" alt="heroSectionImg" loading='lazy' />
          <img className='heroImg4'
          src="https://ik.imagekit.io/rhuubreuu/porsche-website/cosmos_1674367478.webp" alt="heroSectionImg" loading='lazy' />
        </div>
    </section>
  )
}

export default Hero