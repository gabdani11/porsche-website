import React from 'react'
import './videosection.scss'

const VideoSection = () => {
  return (
    <>
    <div className="imageContainer">
            <img className='backgroundShape' src="https://ik.imagekit.io/rhuubreuu/porsche-website/shape1.webp?updatedAt=1778355034229" alt="backgroundShape" />
            <div className='imageFlex'>
                <div>
                    <img src="https://ik.imagekit.io/rhuubreuu/porsche-website/tireimg.webp?updatedAt=1778355033842" alt="tires" />
                </div>
                <div>
                    <img src="https://ik.imagekit.io/rhuubreuu/porsche-website/porscheback.webp?updatedAt=1778355033811" alt="backsidecar" />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default VideoSection