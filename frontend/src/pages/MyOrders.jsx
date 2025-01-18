import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'

const MyOrders = () => {

    const {url,token} = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrders=async()=>{
        const response =  await axios.post(`${url}/api/order/userorders`,{},{headers:{token}})
        setData(response.data.data)
        console.log(response.data.data);
        
    }
    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])

  return (
    <div className='my-12'>
        <h2 className='text-3xl font-medium mx-7 md:mx-0'>My Orders</h2>
        <div className='flex flex-col gap-5 mx-auto mt-7  max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]  w-full '>
            {data.map((order,index)=>(
                <div key={index} className='grid grid-cols-3  md:grid-cols-6 items-center gap-7 text-base py-2 px-5 text-gray-500 border border-tomato'>
                    <img src={assets.parcel_icon} alt="parcel icon" className='w-[50px] md:w-[100px]' />
                    <p className=''>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name+" X "+item.quantity
                        }
                        else{
                            return item.name+" X "+item.quantity+", "
                        }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>Items:{order.items.length} </p>
                    <p className='text-tomato'><span>&#x25cf;</span><b className='font-medium text-gray-600'>{order.status}</b></p>
                    <button onClick={fetchOrders} className='border-none py-3 text-base  rounded bg-red-200 cursor-pointer text-gray-600'>Track Order</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyOrders