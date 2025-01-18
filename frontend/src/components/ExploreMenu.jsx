import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className=' flex flex-col gap-3 px-3 lg:px-0' id='explore-menu'>
        <h1 className='text-gray-700 text-4xl font-medium '>Explore our menu</h1>
        <p className='md:max-w-[60%] lg:max-w-[80%] px-3 md:px-0'>  Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
        <div className="flex justify-between items-center gap-10 text-center m-5 overflow-x-scroll scrollbar-hidden">
            {menu_list.map((item, index)=>(
                <div 
                onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                key={index} 
                className=''>
                    <img 
                    src={item.menu_image}
                     alt="menu image" className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full ${category===item.menu_name?"border-4 border-rose-500":""}`}/>
                    <p className='mt-2 text-gray-500 text-lg cursor-pointer'>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr className='my-2 h-1 bg-gray-200 border-none' />
    </div>
  )
}

export default ExploreMenu