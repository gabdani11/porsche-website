import React from 'react'
import { RiMenu4Line } from "@remixicon/react";
import './navbar.scss'

const Navbar = () => {
  return (
   <nav>
    <h4>
        911
    </h4>
    <div className="menuBtn">
        <RiMenu4Line size={36}/>
    </div>

    
   </nav>
  )
}

export default Navbar