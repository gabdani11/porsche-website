import React from 'react'
import './specification.scss'

const Specification = () => {
  return (
    <div className='specification'>
        <img className='porschetopview' src="https://ik.imagekit.io/rhuubreuu/porsche-website/911%20GT3%20RS%20(1)-Photoroom.webp?updatedAt=1777879032018" alt="porschetopview" />
        <div className="specGrid">
            <div className='box1'>
                <h4>3.2<span>s</span></h4>
                <p>Acceleration0-100 km/h</p>
            </div>
            <div className='box2'>
                <h4>296<span>km/h</span></h4>
                <p>Top Speed</p>
            </div>
            <div className='box3'></div>
            <div className='box4'>
                <h4>386<span>kw</span>/525<span>ps</span></h4>
                <p>Power(kw)/Power(ps)</p>
            </div>
            <div className='box5'>
                <h4>Engine Type:</h4>
                <h4>Naturally Aspirated Flat-6</h4>
            </div>
        </div>
        
    </div>
  )
}

export default Specification