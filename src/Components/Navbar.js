import React from 'react'
import { Logout } from './Logout'
import "../Css/navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
     <div className="navbarLeft">
         <h2>VoucherBooking</h2>
     </div>
    <div className="navbarMiddle">
      <ul>
        <li><a className="active" href="">Events</a></li>
        <li><a href="">Cart</a></li>
        <li><a href="">Events</a></li>
      </ul>
    </div>
     <div className="navbarRight">
       <Logout />
     </div>
    </div>
  )
}
