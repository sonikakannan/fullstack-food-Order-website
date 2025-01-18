import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from 'axios'

const LoginPopup = ({ setshowLogin }) => {

  const {url, setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin= async(event)=>{
    event.preventDefault()
    let newUrl = url
    if(currState==="Login"){
      newUrl+="/api/user/login"
    }
    else{
      newUrl +="/api/user/register"
    }
    const response =  await axios.post(newUrl, data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setshowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }
  return (
    <div className=" absolute z-50 w-full h-full bg-black/60 grid">
      <form
        onSubmit={onLogin}
        className=" place-self-center w-[90%] max-w-[400px] bg-white text-zinc-800 flex flex-col gap-6 py-6 px-8 rounded-lg text-lg animate-fadeIn"
      >
        {/* Popup Title */}
        <div className=" flex justify-between items-center text-black">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt="cross icon"
            className="w-4 cursor-pointer"
          />
        </div>

        {/* Input Fields */}
        <div className=" flex flex-col gap-3">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              className="outline-none border border-slate-200 p-2 rounded"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="outline-none border border-slate-200 p-2 rounded"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            className="outline-none border border-slate-200 p-2 rounded"
            type="password"
            placeholder="Your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border-none p-2 rounded text-white bg-orange-600 text-lg cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        <div className=" flex items-start justify-start gap-2">
          <input type="checkbox" className="mt-1" required />
          <p className="text-gray-800 text-sm">
            By continuing, I agree to the <b>terms of use</b> & <b>privacy policy</b>.
          </p>
        </div>

        {/* Toggle Login/Signup */}
        {currState === "Login" ? (
          <p className="text-gray-800 text-sm">
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-orange-500 cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-gray-800 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-orange-500 cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
