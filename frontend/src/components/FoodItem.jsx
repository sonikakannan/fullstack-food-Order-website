import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    const [itemCount, setItemCount] = useState(0)
    const {cartsItems,addToCart, removeFromCart,url} = useContext(StoreContext)
  return (
    <div className=' w-full m-auto rounded-lg shadow shadow-gray-300 animate-fadeIn '>
        <div className=" relative">
            <img src={`${url}/images/${image}`}
 alt={name} className=" w-full rounded-lg" />
            {!cartsItems[id]?
            <img className=' w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className=' absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-full bg-white'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-8 cursor-pointer' />
                <p>{cartsItems[id]}</p>
                <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className='w-8 cursor-pointer' />
            </div>
            }
        </div>
        <div className=" p-5">
            <div className=" flex justify-between items-center mb-3">
                <p className='text-base font-medium'> {name} </p>
                <img src={assets.rating_starts} alt="rating_starts" className='w-[70px]'/>
            </div>
            <p className=' text-gray-400 text-[15px]'>{description}</p>
            <p className=' text-red-700 text-xl font-medium my-3'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem