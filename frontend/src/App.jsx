import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Footer from "./components/Footer"
import Appdownload from "./components/Appdownload"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup"
import Verify from "./pages/Verify"
import MyOrders from "./pages/MyOrders"

function App() {

  const [showLogin, setshowLogin] = useState(false)

  return (
   <>
   {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
   <div className=" md:w-4/5  md:m-auto">
   <Navbar setshowLogin={setshowLogin}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/order" element={<PlaceOrder/>}/>
    <Route path="/verify" element={<Verify/>} />
    <Route path="/myorders" element={<MyOrders/>} />
   </Routes>
   </div>
   <Appdownload/>
   <Footer/>
   
   </>
  )
}

export default App
