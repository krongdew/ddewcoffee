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
        { name: 'Latte', sweetness: 'Medium', type: 'Cup', separate: 'No', qty:'1' },
        { name: 'Espresso', sweetness: 'Low', type: 'Cup', separate: 'Yes',  qty:'1'},
      ],
      total: 300,
      paymentStatus: 'Paid' // or 'Pending'
    },
    {
      id: 2,
      queueNumber: 102,
      customerName: '',
      orderDate: '2024-09-12',
      phone: '123-456-7890',
      cups: 1,
      deliveryType: 'Dine-in',
      coffeeItems: [
        { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
          { name: 'Americano', sweetness: 'None', type: 'Cup', separate: 'No',qty:'1' },
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
              style={{ minWidth: '250px', zIndex:9 }}
            >
              <h1 className="font-bold text-xl mb-2">Queue: {order.queueNumber}</h1>
              <hr></hr>
                <table className="text-base mt-1">
                    <tr>
                        <td>Customer : </td>
                        <td></td>
                        <td><p>{order.customerName || 'General'}</p></td>
                    </tr>
                    <tr>
                        <td>Date : </td>
                        <td></td>
                        <td><p>{order.orderDate}</p></td>
                    </tr>  
                    <tr>
                        <td>Phone : </td>
                        <td></td>
                        <td>{order.phone && <p>{order.phone}</p>}</td>
                    </tr>
                    <tr>
                        <td>Cups : </td>
                        <td></td>
                        <td><p>{order.cups}</p></td>
                    </tr>
                </table>
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
      <div className="w-full lg:w-4/12 px-5 sticky bg-white  rounded-lg" style={{ marginTop: -50, position: 'sticky', top: 0 }}>
      {selectedOrder ? (
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-bold text-xl mb-2">Order Details</h3>
            <hr></hr>
            <table>
                <tr>
                    <td><p>Queue: {selectedOrder.queueNumber}</p></td>
                    <td width="50px"></td>
                    <td><p>Order Type: {selectedOrder.deliveryType}</p></td>
                </tr>
                <tr>
                    <td><p>Customer: {selectedOrder.customerName || 'General Customer'}</p></td>
                    <td></td>
                    <td>{selectedOrder.phone && <p>Phone: {selectedOrder.phone}</p>}</td>
                </tr>
                <tr>
                    <td colspan="3">{selectedOrder.deliveryType === 'Delivery' && <p>Address: {selectedOrder.deliveryAddress}</p>}</td>
                </tr>
                
            </table>
            <div className="mt-2">
              <h4 className="font-bold">Order Items:</h4>
              <table style={{border:"1px solid grey"}}>
                    <tr style={{border:"1px solid grey"}}>
                        <th width="150px" style={{border:"1px solid grey"}}>Menu</th>
                        <th width="100px" style={{border:"1px solid grey"}}>Sweetness</th>
                        <th width="100px" style={{border:"1px solid grey"}}>Type</th>
                        <th width="100px" style={{border:"1px solid grey"}}>Separate</th>
                        <th width="50px" style={{border:"1px solid grey"}}>QTY</th>
                    </tr>
              {selectedOrder.coffeeItems.map((item, index) => (
                    <tr key={index} style={{border:"1px solid grey",textAlign:"center"}}>
                        <td width="150px" style={{border:"1px solid grey"}}>{item.name}</td>
                        <td width="100px" style={{border:"1px solid grey"}}> {item.sweetness}</td>
                        <td width="100px" style={{border:"1px solid grey"}}> {item.type}</td>
                        <td width="100px" style={{border:"1px solid grey"}}> {item.separate}</td>
                        <td width="50px" style={{border:"1px solid grey"}}> {item.qty}</td>
                    </tr>
              ))}
              <tr>
                <td colspan="4" style={{textAlign:"right"}}><p>Cups : </p></td>
                <td style={{textAlign:"right"}}><p>{selectedOrder.cups}</p></td>
              </tr>
              <tr>
              <td colspan="4" style={{textAlign:"right"}}><p>Total : </p></td>
              <td width="100px" style={{textAlign:"right"}}><p>{selectedOrder.total} THB</p></td>
              </tr>
              <tr>
              <td colspan="4" style={{textAlign:"right"}}><p>Status : </p></td>
              <td style={{textAlign:"right"}}><p>{selectedOrder.paymentStatus}</p></td>
              </tr>
            </table>
            </div>
          
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
