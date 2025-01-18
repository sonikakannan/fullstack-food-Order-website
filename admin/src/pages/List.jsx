import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message || "Server Error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network Error. Please try again.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood=async(foodId)=>{
    const response= await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Server Error")
    }
    
  }

  return (
    <div className=" px-4 py-6 max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px] w-full">
      <h2 className="text-3xl font-medium mb-4">Food List</h2>
      <div className=" w-full">
        {/* Header */}
        <div className=" bg-gray-100  grid grid-cols-3 sm:grid-cols-5 items-center gap-2 py-3 px-4 text-base border border-gray-300 font-bold">
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Action</div>
        </div>

        {/* Rows */}
        {list.map((item, index) => (
          <div
            key={index}
            className=" w-full grid grid-cols-3 sm:grid-cols-5 items-center gap-2 py-3 px-4 text-base border border-gray-300 hover:bg-gray-50"
          >
            <div>
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="w-12 h-12 object-cover"
              />
            </div>
            <div>{item.name}</div>
            <div>{item.category}</div>
            <div>${item.price}</div>
            <div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer"
                onClick={() => removeFood(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
