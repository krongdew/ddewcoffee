import { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';

const MenuItem = ({ image, name, price, onAddToOrder }) => {
  return (
    
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
      <div className="border rounded-lg shadow-md p-4 text-center ">
      <img src={image} alt={name} className="w-full h-20 object-cover mb-2 rounded-lg" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">฿{price}</p>
      <button 
        onClick={() => onAddToOrder({ name, price })}
        className="mt-3 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
        Add to Order
      </button>
    </div>
    </div>
  );
};

export default MenuItem;
