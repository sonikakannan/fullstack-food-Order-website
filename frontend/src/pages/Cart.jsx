import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartsItems, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  const navigate= useNavigate()
  return (
    <div className=" mt-24">
      <div className=" ">
        <div className=" grid grid-cols-6 items-center text-gray-500 text-lg">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartsItems[item._id] > 0) {
          return (
            <div className="" key={index}>
              <div className=" grid grid-cols-6 items-center text-lg my-2 text-black">
                <img src={`${url}/images/${item.image}`} alt={item.name} className="w-[50px]" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartsItems[item._id]}</p>
                <p>${item.price * cartsItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer">X</p>
              </div>
              <hr className="h-1 mt-3 bg-gray-100 border-none"/>
            </div>
          );
        }
      })}
      </div>
      <div className=" mt-20 flex flex-col md:flex-row flex-wrap justify-between gap-5">
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
              <p>${2}</p>
            </div>
            <hr />
            <div className=" flex justify-between text-gray-500">
              <b>Total</b>
              <b>${ getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className="border-none text-white bg-tomato w-52 py-3 rounded cursor-pointer">PROCEED TO CHECKOUT</button>
        </div>
        <div className=" flex-1">
          <div>
            <p className="text-gray-500">If you have a promo code,Enter it here.</p>
            <div className=" mt-2 flex items-center justify-between text-center bg-gray-200 rounded">
              <input type="text" placeholder="promo code" className="bg-transparent border-none outline-none pl-2" />
              <button className="w-[150px] py-3 px-3 bg-black border-none text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
