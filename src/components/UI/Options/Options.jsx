import React from 'react'
import { NavLink } from 'react-router-dom'

export const Options = () => {
  return (
    <nav className='container-options'>
        <ul>
            <li><NavLink to="/ContactUs">contact us</NavLink></li>
            <li><NavLink to="">wishlist</NavLink></li>
            <li><NavLink to="">account</NavLink></li>
            <li><NavLink to="">search</NavLink></li>
            <li><NavLink to="">cart</NavLink></li> 
        </ul>
    </nav>
  )
}