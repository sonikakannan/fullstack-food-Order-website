import React from 'react';

const Header = () => {
  return (
    <div
      className=" h-[74vw] sm:h-[44vw] md:height-img  my-7 m-auto contain-size relative bg-[url('/header_img.png')] bg-cover bg-center text-white p-5 lg:p-10"
    >
      <div className=" animate-fadeIn absolute flex flex-col items-start gap-5 sm:gap-6  max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] bottom-[8%] left-5 sm:left-[6vw]">
        <h2 className="font-medium  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          Order your favourite food here
        </h2>
        <p className="text-white text-sm md:text-base">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. 
          Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="border-none text-gray-400 font-medium py-2 px-4 sm:py-3 sm:px-5 bg-white rounded-full hover:bg-gray-200 transition-all">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
