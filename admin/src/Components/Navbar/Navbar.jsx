import React from 'react'
import './Navbar.css'
import navprofileIcon from '../Assets/logo.png'

const Navbar = () => {

  return (
    <div className='navbar'>
      {/* <img src={navlogo} className='nav-logo' alt="" />
       */}
       <h1 style={{color: "#efcf83"}}>Admin Panel</h1>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
