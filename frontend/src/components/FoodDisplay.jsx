import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list) {
    // Handle the case where food_list is undefined
    return <div>No food items available.</div>;
  }

  return (
    <div className="mt-7" id="food-display">
      <h2 className="text-gray-700 text-4xl font-medium m-2">Top dishes near you</h2>
      <div className="grid sm:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-7 md:px-5 place-items-center">
        {food_list
          .filter(item => category === 'All' || category === item.category)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
