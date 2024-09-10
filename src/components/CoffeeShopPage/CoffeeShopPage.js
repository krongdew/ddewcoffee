import { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import OrderSummary from '../OrderSummary/OrderSummary';


const CoffeeShopPage = () => {
  const [orderItems, setOrderItems] = useState([]);

  const coffeeMenu = [
    { name: 'Espresso', image: '/images/espresso.jpg', price: 50 },
    { name: 'Latte', image: '/images/latte.jpg', price: 70 },
    { name: 'Cappuccino', image: '/images/cappuccino.jpg', price: 75 },
    { name: 'Mock', image: '/images/cappuccino.jpg', price: 75 },
    { name: 'Latte', image: '/images/latte.jpg', price: 70 },
    
  ];

  const handleAddToOrder = (item) => {
    const existingItem = orderItems.find(orderItem => orderItem.name === item.name);
    if (existingItem) {
      setOrderItems(orderItems.map(orderItem => 
        orderItem.name === item.name 
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ));
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateItem = (index, quantity) => {
    if (quantity > 0) {
      setOrderItems(orderItems.map((item, i) => 
        i === index ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (index) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap">
       
    <div className="flex">
      <div className="w-2/3 grid grid-cols-3 gap-4 p-6">
        {coffeeMenu.map((coffee, index) => (
          <MenuItem 
            key={index} 
            name={coffee.name} 
            image={coffee.image} 
            price={coffee.price} 
            onAddToOrder={handleAddToOrder} 
          />
        ))}
      </div>
      <div className="w-1/3 p-4">
        <OrderSummary 
          orderItems={orderItems} 
          onUpdateItem={handleUpdateItem} 
          onRemoveItem={handleRemoveItem} 
        />
      </div>
    </div>
    </div>
   
  );
};

export default CoffeeShopPage;
