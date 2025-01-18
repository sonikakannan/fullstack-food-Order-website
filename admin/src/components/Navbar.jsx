import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-2 px-4  ">
      <img src={assets.logo} alt="logo" className="logo w-32" />
      <img src={assets.profile_image} alt="profile image" className=" w-10" />
    </div>
  );
};

export default Navbar;
