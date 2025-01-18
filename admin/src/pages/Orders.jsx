import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import {assets} from '../assets/assets'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Server Error");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders");
    }
  };
  
  const statusHandler= async(event, orderId)=>{
    console.log(event,orderId);
    const response = await axios.post(`${url}/api/order/status`,{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }
  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='container mx-auto max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]'>
      <h3 className='text-3xl  mt-4 font-medium'>Order Page</h3>
      <div>
        {orders.map((order,index)=>(
          <div key={index} className='grid grid-cols-3 md:grid-cols-5 items-start gap-7 border border-tomato p-5 my-7 text-base text-gray-700'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='font-semibold  mb-1'>
                {order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name+" X " + item.quantity
                  }
                  else{
                    return item.name+" X "+item.quantity+", "
                  }
                })}
              </p>
              <p>{order.address.firstName+" "+ order.address.lastName}</p>
             <div>
             <p>{order.address.street+","}</p>
             <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div> 
              <p>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Orders