import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md'>
      <div>
        {/* -----Left Section------- */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, id.</p>

        </div>

        {/* ----Center Section------ */}
        <div>
            <p>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>

        </div>

        {/* -----Right Section------- */}
        <div>
            <p>GET IN TOUCH</p>
            <ul>
                <li>98979-9988-89</li>
                <li>grsfjejf@gmail.com</li>
            </ul>

        </div>


      </div>
      {/* --------Copyright Text */}
      <div>
        <hr />
        <p> Copyright 2025@ PhoeniX All Right Reserved </p>
      </div>

    </div>
  )
}

export default Footer
