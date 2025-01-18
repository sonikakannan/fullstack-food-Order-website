import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import {ToastContainer} from 'react-toastify'


function App() {
  const url = "https://fullstack-food-delivary-backend.onrender.com/
  return (
    <div className="">
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
