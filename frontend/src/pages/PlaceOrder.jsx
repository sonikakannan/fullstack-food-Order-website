import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartsItems,url} = useContext(StoreContext)

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangeHandler=(event)=>{
    const name = event.target.name
    const value =  event.target.value
    setData(data=>({...data,[name]:value}))
  }
  
  const placeOrder=async(event)=>{
    event.preventDefault()
    let orderItems=[]
    food_list.map((item)=>{
      if(cartsItems[item._id]>0){
        let itemInfo=item
        itemInfo["quantity"] = cartsItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
    console.log(orderItems);
    if(response.data.success){
      const {session_url} = response.data
      window.location.replace(session_url)
    }
    else{
      alert("Server Error")
    }
    
  }

  const navigate=useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])
  return (
    <form action="" onSubmit={placeOrder} className=" flex items-start justify-between gap-20 mt-24">
      <div className=" w-full max-w-[500px]">
        <p className=' text-3xl font-semibold mb-12'>Delivery Information</p>
        <div className=" flex gap-2">
          <input 
          name="firstName"
          onChange={onchangeHandler}
          value={data.firstName}
          type="text" placeholder='First name' 
          className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required />
          <input 
          name="lastName"
          onChange={onchangeHandler}
          value={data.lastName}
          type="text" placeholder='Last name' 
          className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required/>
        </div>
        <input 
        name="email"
        onChange={onchangeHandler}
        value={data.email}
        type="email" placeholder='Email address' 
        className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato'  required/>
        <input 
        name="street"
        onChange={onchangeHandler}
        value={data.street}
        type="text" placeholder='Street' 
        className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required />
        <div className=" flex gap-2">
          <input 
          name="city"
          onChange={onchangeHandler}
          value={data.city}
          type="text" placeholder='City'
           className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required />
          <input 
          name="state"
          onChange={onchangeHandler}
          value={data.state}
          type="text" placeholder='State' 
          className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required />
        </div>
        <div className=" flex gap-2">
          <input 
          name="zipcode"
          onChange={onchangeHandler}
          value={data.zipcode}
          type="text" placeholder='Zip code' 
          className='mb-3  w-full p-2 border border-gray-200 rounded outline-tomato' required/>
          <input 
          name="country"
          onChange={onchangeHandler}
          value={data.country}
          type="text" placeholder='Country' 
          className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required/>
        </div>
        <input 
        name="phone"
        onChange={onchangeHandler}
        value={data.phone}
        type="text" placeholder='phone' 
        className='mb-3 w-full p-2 border border-gray-200 rounded outline-tomato' required/>
      </div>
      <div className=" w-full max-w-[500px]">
      <div className=" flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className=" flex justify-between text-gray-500">
              <p>Subtotal</p>
              <p>${ getTotalCartAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className=" flex justify-between text-gray-500">
              <p>Delivery Fees</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className=" flex justify-between text-gray-500">
              <b>Total</b>
              <b>${ getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button
          type='submit' 
          className="border-none mt-7 text-white bg-tomato w-52 py-3 rounded cursor-pointer">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder