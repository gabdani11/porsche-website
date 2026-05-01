import React from 'react'
import './about.scss'
import {timeline} from './data.js'

const About = () => {
  return (
    <div className="about">
      <h4>Our legacy</h4>
      <p>Founded in <span>1931</span> by 
        Ferdinand <span>Porsche</span>, Porsche represents 
        precision engineering, <span>iconic design</span>, and unmatched driving performance. 
        From racetracks to city roads, every Porsche is built to deliver 
        an <span>extraordinary</span> experience.</p>
        <div className="carImageContainer">
          <img className='aboutPorscheImg' src="https://ik.imagekit.io/rhuubreuu/porsche-website/1396149%201.webp" alt="Porschecar" />
          <img className='frame1Img' src="/frame1.webp" alt="blackframe" />
          <h4 id='aboutBottomTitle'>Motorsport<span>legacy</span></h4>
        </div>
        <div className="yearList">
          {
            timeline.map((data, index)=>{
              return(
                <div className="box box1" key={index}>
            <div className="visible">
              <h4>{data.year}</h4>
              <p>{data.title}</p>
            </div>
            <div className="reveal">
             <p>
              {data.desc}
             </p>
            </div>
          </div>
              )
            })
          }
         
          
          
          
        </div>

    </div>
  )
}

export default About