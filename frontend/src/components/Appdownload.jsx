import React from 'react'
import { assets } from '../assets/assets'
const Appdownload = () => {
  return (
    <div className=' m-auto mt-24 text-4xl text-center font-medium' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className=' flex  items-center  justify-center gap-5 mt-10'>
            <img src={assets.play_store} alt="play store" className=' max-w-44 cursor-pointer hover:scale-105'/>
            <img src={assets.app_store} alt="app store" className='max-w-44 hover:scale-105' />
        </div>
    </div>
  )
}

export default Appdownload