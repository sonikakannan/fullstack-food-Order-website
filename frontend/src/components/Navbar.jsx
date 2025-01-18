import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { CiMenuFries } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setshowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [toggleIcon, setToggleIcon] = useState(false);
  const navigate= useNavigate()

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  

  const logout = () => {
    setToken(null); // Clear token state
    localStorage.removeItem('token'); // Remove token from storage
    navigate("/")
  };

  return (
    <div className=" p-3 md:p-5 flex justify-between items-center relative z-50 bg-white">
      <Link to={'/'}>
        <img src={assets.logo} alt="logo" className="logo w-[140px] md:w-[150px]" />
      </Link>

      {/* Desktop Menu */}
      <ul className=" hidden lg:flex gap-5 text-gray-600 text-lg">
        <Link
          to={'/'}
          className={`cursor-pointer ${
            menu === 'home' ? 'pb-1 border-b-2 border-gray-600' : ''
          }`}
          onClick={() => setMenu('home')}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={`cursor-pointer ${
            menu === 'menu' ? 'pb-1 border-b-2 border-gray-600' : ''
          }`}
          onClick={() => setMenu('menu')}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={`cursor-pointer ${
            menu === 'mobile-app' ? 'pb-1 border-b-2 border-gray-600' : ''
          }`}
          onClick={() => setMenu('mobile-app')}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={`cursor-pointer ${
            menu === 'contact-us' ? 'pb-1 border-b-2 border-gray-600' : ''
          }`}
          onClick={() => setMenu('contact-us')}
        >
          Contact-Us
        </a>
      </ul>

      {/* Right Side */}
      <div className=" flex items-center gap-10">
        <div className=" relative">
          <Link to={'/cart'}>
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          <div className=" absolute -top-2 -right-2 min-h-5 min-w-6 text-center bg-tomato rounded-full">
            {getTotalCartAmount() === 0 ? '0' : getTotalCartAmount()}
          </div>
        </div>
        {!token ? (
 <button
 onClick={() => setshowLogin(true)}
 className="bg-transparent hidden sm:flex text-base text-gray-600 border hover:border-rose-500 hover:scale-105 rounded-full py-2 px-7 cursor-pointer"
>
 Sign in
</button>
        ) : (
          <div className=" relative group">
          <div className="">
            <img src={assets.profile_icon} alt="profile icon" className="cursor-pointer" />
          </div>
          <ul className="absolute right-0 z-10 hidden w-[156px] bg-white cursor-pointer shadow-lg rounded-md group-hover:block">
            <li onClick={()=>navigate('/myorders')}  className="flex items-center gap-2 px-4 py-2 ">
              <img  src={assets.bag_icon} alt="bag icon" className='w-5 h-5'/>
              <p className='hover:text-red-500'>Orders</p>
            </li>
            <hr className="my-1 border-gray-200" />
            <li onClick={logout} className="flex items-center gap-2 px-4 py-2 ">
              <img src={assets.logout_icon} alt="logout icon" className='w-5 h-5'/>
              <p className='hover:text-red-500'>Logout</p>
            </li>
          </ul>
        </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex lg:hidden" onClick={handleToggleIcon}>
        <CiMenuFries className="w-9 h-9 cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {toggleIcon && (
        <div className=" absolute top-16 right-5 bg-white sm:w-96 shadow-lg rounded-lg z-50">
          <ul className=" flex flex-col gap-5 text-gray-600 text-lg p-5">
            <li
              className={`cursor-pointer ${
                menu === 'home' ? 'pb-1 border-b-2 border-gray-600' : ''
              }`}
              onClick={() => setMenu('home')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                menu === 'menu' ? 'pb-1 border-b-2 border-gray-600' : ''
              }`}
              onClick={() => setMenu('menu')}
            >
              Menu
            </li>
            <li
              className={`cursor-pointer ${
                menu === 'mobile-app' ? 'pb-1 border-b-2 border-gray-600' : ''
              }`}
              onClick={() => setMenu('mobile-app')}
            >
              Mobile-App
            </li>
            <li
              className={`cursor-pointer ${
                menu === 'contact-us' ? 'pb-1 border-b-2 border-gray-600' : ''
              }`}
              onClick={() => setMenu('contact-us')}
            >
              Contact-Us
            </li>
          </ul>
          <div className=" flex sm:hidden flex-col items-center gap-5 py-2 px-5">
          {!token ? (
 <button
 onClick={() => setshowLogin(true)}
 className="bg-transparent hidden sm:flex text-base text-gray-600 border hover:border-rose-500 hover:scale-105 rounded-full py-2 px-7 cursor-pointer"
>
 Sign in
</button>
        ) : (
          <div className=" relative group">
          <div className="">
            <img src={assets.profile_icon} alt="profile icon" className="cursor-pointer" />
          </div>
          <ul className="absolute right-0 z-10 hidden w-[156px] bg-white cursor-pointer shadow-lg rounded-md group-hover:block">
          <li onClick={()=>navigate('/myorders')} className="flex items-center gap-2 px-4 py-2">
      <img src={assets.bag_icon} alt="bag icon" className="w-5 h-5" />
      <p className="hover:text-red-500">Orders</p>
    </li>
            <hr className="my-1 border-gray-200" />
            <li onClick={logout} className="flex items-center gap-2 px-4 py-2 ">
              <img src={assets.logout_icon} alt="logout icon" className='w-5 h-5'/>
              <p className='hover:text-red-500'>Logout</p>
            </li>
          </ul>
        </div>
        )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
