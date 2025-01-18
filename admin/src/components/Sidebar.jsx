import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { LuClipboardList } from "react-icons/lu";


const Sidebar = () => {
  return (
    <div className=" w-[18%] min-h-screen border border-t-0 border-gray-200">
      <div className=" pt-12 pl-[20%] px-5 flex flex-col gap-5">
        <NavLink
          to={'/add'}
          className={({ isActive }) =>
            ` flex items-center gap-3 border border-gray-300  py-2 px-3 rounded cursor-pointer ${
              isActive ? 'bg-red-100 border border-tomato' : ''
            }`
          }
        >
          <img src={assets.add_icon} alt="add icon" />
          <p className="hidden lg:flex">Add Items</p>
        </NavLink>

        <NavLink
          to={'/list'}
          className={({ isActive }) =>
            ` flex items-center gap-3 border border-gray-300 py-2 px-3 rounded cursor-pointer ${
              isActive ? 'bg-red-100 border border-tomato' : ''
            }`
          }
        >
<LuClipboardList className='w-8 h-8'/>          
<p className="hidden lg:flex">List Items</p>
        </NavLink>

        <NavLink
          to={'/orders'}
          className={({ isActive }) =>
            ` flex items-center gap-3 border border-gray-300  py-2 px-3 rounded cursor-pointer ${
              isActive ? 'bg-red-100 border border-tomato' : ''
            }`
          }
        >
          <img src={assets.order_icon} alt="order icon" />
          <p className="hidden lg:flex">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
