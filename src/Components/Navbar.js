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
       <a href=""><li>Events</li></a>
       <a href=""><li>cart</li></a>
       <a href=""><li>Events</li></a>
      </ul>
    </div>
     <div className="navbarRight">
       <Logout />
     </div>
    </div>
  )
}
