import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className=' mt-24 text-slate-200 bg-zinc-800 flex flex-col items-center px-5 gap-5 py-5 pt-20'>
        <div className=" w-full grid grid-cols-3 gap-20">
            <div className=" flex flex-col items-start gap-5">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis iusto, rem soluta error culpa.</p>
                <div className=" flex gap-3">
                <img src={assets.facebook_icon} alt="facebook_icon" />
                <img src={assets.twitter_icon} alt="twitter_icon" />
                <img src={assets.linkedin_icon} alt="linkedin_icon" />
            </div>
            </div>
            
        <div className=" flex flex-col items-start gap-5">
            <h2>COMPANY</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 pb-2'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                <li>Contact Us</li>
                <li></li>
            </ul>
        </div>
        <div className=" flex flex-col items-start gap-5">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>cbn@tomato.com</li>
            </ul>
        </div>
        </div>
        <hr className='w-full h-1 my-5  text-gray-200'/>
        <p className=''>
            Copyright 2025 © tomato.com-All right Reserved. 
        </p>
    </div>
  )
}

export default Footer