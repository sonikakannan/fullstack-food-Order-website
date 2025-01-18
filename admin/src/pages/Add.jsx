import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      // Set the product name as the uploaded file's name without the file extension
      const fileNameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
      setData((prevData) => ({ ...prevData, name: fileNameWithoutExtension }));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      console.log(response);
      if (response.data.success) {
        setData({ name: "", description: "", price: "", category: "Salad" });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Server Error");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response?.data?.message || "Server Error");
    }
  };

  return (
    <div className='w-[70%] mx-auto text-gray-800 text-base'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
        <div className=" flex flex-col gap-2 ">
          <p className='text-xl font-medium mt-8'>Upload Image</p>
          <label htmlFor="image" className='max-w-[150px] cursor-pointer'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload area" className='w-[120px]' />
          </label>
          <input
            onChange={onImageChange}
            type="file"
            id='image'
            hidden
            required
          />
        </div>
        <div className=" flex flex-col gap-2">
          <p className='text-xl font-medium '>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type here'
            className='py-2 px-5 border border-gray-500 rounded-md outline-none max-w-[400px]'
          />
        </div>
        <div className=" w-[280px] flex flex-col gap-2">
          <p className='text-xl font-medium '>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder='Write content here'
            className='p-2 border border-gray-500 rounded-md outline-none max-w-[500px]'
          ></textarea>
        </div>
        <div className=" flex flex-col sm:flex-row gap-8">
          <div className=' flex  flex-col gap-2'>
            <p className='text-xl font-medium'>Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className='py-2 px-3 text-lg border border-gray-500 rounded-md outline-none '
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p className='text-xl font-medium'>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name='price'
              placeholder='$20'
              className='mt-2 border border-gray-500 py-2 rounded-md px-4 text-black'
            />
          </div>
        </div>
        <button type='submit' className=' max-w-[120px] rounded border-none p-2 bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
