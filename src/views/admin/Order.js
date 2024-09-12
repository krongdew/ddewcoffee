import { useState } from 'react';

// Sample order data (replace with actual data)
const orders = [
    {
      id: 1,
      queueNumber: 101,
      customerName: 'John Doe',
      orderDate: '2024-09-12',
      phone: '123-456-7890',
      cups: 2,
      deliveryType: 'Delivery', // or 'Dine-in'
      deliveryAddress: '123 Coffee Lane, Brewtown',
      coffeeItems: [
        { name: 'Latte', sweetness: 'Medium', type: 'Cup', separate: 'No' },
        { name: 'Espresso', sweetness: 'Low', type: 'Cup', separate: 'Yes' },
      ],
      total: 300,
      paymentStatus: 'Paid' // or 'Pending'
    },
    {
      id: 2,
      queueNumber: 102,
      customerName: '',
      orderDate: '2024-09-12',
      phone: '',
      cups: 1,
      deliveryType: 'Dine-in',
      coffeeItems: [
        { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
      ],
      total: 150,
      paymentStatus: 'Pending'
    },
    {
        id: 3,
        queueNumber: 103,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
      {
        id: 4,
        queueNumber: 104,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
      {
        id: 5,
        queueNumber: 105,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
      {
        id: 6,
        queueNumber: 106,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
      {
        id: 7,
        queueNumber: 107,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
      {
        id: 8,
        queueNumber: 108,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
      {
        id: 9,
        queueNumber: 109,
        customerName: '',
        orderDate: '2024-09-12',
        phone: '',
        cups: 1,
        deliveryType: 'Dine-in',
        coffeeItems: [
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No' },
        ],
        total: 150,
        paymentStatus: 'Pending'
      },
    // Add more orders here
  ];
  
  const OrderPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState(null); // State to track selected order for details
    const itemsPerPage = 8;
  
    // Filter orders based on search term
    const filteredOrders = orders.filter((order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Calculate total number of pages
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  
    // Function to handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // Function to handle order selection
    const handleOrderSelect = (order) => {
      setSelectedOrder(order);
    };
  
    // Get current page's orders
    const currentOrders = filteredOrders.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  return (
    <div className="flex flex-wrap ">
      {/* Menu section 70% */}
      <div className="w-full lg:w-8/12 px-4 h-screen">
        {/* Search and Filter */}
        <div className="mb-4 flex justify-between items-center z-2">
          <input
            type="text"
            placeholder="Search customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-lg w-1/2"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Order items */}
        <div className="flex flex-wrap ">
          {currentOrders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 m-2 bg-white w-48" // Set width to 200px (approx. 48 * 4px)
              style={{ minWidth: '200px', zIndex:9 }}
            >
              <h3 className="font-bold">Queue: {order.queueNumber}</h3>
              <p>Customer: {order.customerName}</p>
              <p>Order Date: {order.orderDate}</p>
              {order.phone && <p>Phone: {order.phone}</p>}
              <p>Cups: {order.cups}</p>
              <button
                onClick={() => handleOrderSelect(order)}
                className=" text-white px-4 py-2 mt-2 rounded-lg"
                style={{zIndex:9,backgroundColor:"rgb(56 189 248)"}}
              >
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`p-2 border rounded-lg mx-1 ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Order Detail section 30% */}
      <div className="w-full lg:w-4/12 px-5 sticky bg-white" style={{ marginTop: -50, position: 'sticky', top: 0 }}>
      {selectedOrder ? (
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-bold">Order Details</h3>
            <p>Queue: {selectedOrder.queueNumber}</p>
            <p>Order Type: {selectedOrder.deliveryType}</p>
            {selectedOrder.deliveryType === 'Delivery' && <p>Address: {selectedOrder.deliveryAddress}</p>}
            <p>Customer: {selectedOrder.customerName || 'General Customer'}</p>
            {selectedOrder.phone && <p>Phone: {selectedOrder.phone}</p>}
            <p>Cups: {selectedOrder.cups}</p>
            <div className="mt-2">
              <h4 className="font-bold">Coffee Items:</h4>
              {selectedOrder.coffeeItems.map((item, index) => (
                <p key={index}>
                  {item.name} - Sweetness: {item.sweetness}, Type: {item.type}, Separate: {item.separate}
                </p>
              ))}
            </div>
            <p className="mt-2">Total: {selectedOrder.total} THB</p>
            <p>Status: {selectedOrder.paymentStatus}</p>
            <div className="mt-4">
              <button className=" text-white px-4 py-2 mr-2 rounded-lg" style={{backgroundColor:"rgb(56 189 248)"}}>Mark as Completed</button>
              <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded-lg">Cancel Order</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit Order</button>
              </div>
          </div>
        ) : (
          <p>No order selected</p>
        )}
      </div>
    </div>
  );
};


export default OrderPage;
