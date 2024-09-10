import { useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import espresso from '../../assets/img/espresso.jpg'


const CoffeeShopPage = () => {
  const [orderItems, setOrderItems] = useState([]);

  const coffeeMenu = [
    { name: 'Espresso', image: espresso, price: 50 },
    { name: 'Latte', image: espresso, price: 70 },
    { name: 'Cappuccino', image: espresso, price: 75 },
    { name: 'Espresso', image: espresso, price: 50 },
    { name: 'Latte', image: espresso, price: 70 },
    { name: 'Cappuccino', image: espresso, price: 75 },
    { name: 'Espresso', image: espresso, price: 50 },
    { name: 'Latte', image: espresso, price: 70 },
    { name: 'Cappuccino', image: espresso, price: 75 },
    { name: 'Espresso', image: espresso, price: 50 },
    { name: 'Latte', image: espresso, price: 70 },
    { name: 'Cappuccino', image: espresso, price: 75 },
    
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
      {/* เมนู 70% */}
     
      {/* 70% สำหรับส่วนของเมนู */}
      <div className="w-full lg:w-8/12 px-4">
        <div className="flex flex-wrap ">
          {coffeeMenu.map((coffee, index) => (
            <div key={index} className="max-w-[200px] pr-4">
              <MenuItem 
                name={coffee.name} 
                image={coffee.image} 
                price={coffee.price} 
                onAddToOrder={handleAddToOrder} 
              />
            </div>
          ))}
        </div>
        
      </div>

       
      {/* 30% สำหรับส่วนของสรุปการสั่งซื้อ */}
      <div className="w-full lg:w-4/12 px-5">
        <OrderSummary 
          orderItems={orderItems} 
          onUpdateItem={handleUpdateItem} 
          onRemoveItem={handleRemoveItem} 
        />
      </div>
    
    </div>
  );
};

export default CoffeeShopPage;
