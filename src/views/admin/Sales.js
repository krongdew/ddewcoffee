import { useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import espresso from '../../assets/img/espresso.jpg'

const CoffeeShopPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const coffeeMenu = [
    { name: 'Espresso', image: espresso, price: 50, type: 'Coffee' },
    { name: 'Latte', image: espresso, price: 70, type: 'Coffee' },
    { name: 'Cappuccino', image: espresso, price: 75, type: 'Coffee' },
    { name: 'Green Tea', image: espresso, price: 60, type: 'Tea' },
    { name: 'Matcha Latte', image: espresso, price: 65, type: 'Tea' },
    { name: 'Mocha', image: espresso, price: 80, type: 'Coffee' },
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

  // Filter and search logic
  const filteredMenu = coffeeMenu.filter(item => {
    return (
      (filterType === 'All' || item.type === filterType) && 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex flex-wrap">
      {/* Menu section 70% */}
      <div className="w-full lg:w-8/12 px-4">
        {/* Search and Filter */}
        <div className="mb-4 flex justify-between items-center z-2">
          <input 
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-lg w-1/2"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="All">All Types</option>
            <option value="Coffee">Coffee</option>
            <option value="Tea">Tea</option>
          </select>
        </div>

        {/* Menu items */}
        <div className="flex flex-wrap">
          
          {filteredMenu.length > 0 ? (
            filteredMenu.map((coffee, index) => (
              <div key={index} className="max-w-[200px] pr-4">
                <MenuItem 
                  name={coffee.name} 
                  image={coffee.image} 
                  price={coffee.price} 
                  onAddToOrder={handleAddToOrder} 
                />
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      </div>

      {/* Order Summary section 30% */}
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
