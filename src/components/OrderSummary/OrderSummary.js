import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Button,Select,Table } from 'antd';
import colors from 'tailwindcss/colors';



const OrderSummary = ({ orderItems, onUpdateItem, onRemoveItem }) => {
    
const calculateTotal = () => {
        return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
      
const [discount, setDiscount] = useState(0); // State สำหรับส่วนลด
const [finalTotal, setFinalTotal] = useState(calculateTotal()); // State สำหรับยอดรวมสุทธิหลังหักส่วนลด



  const handleQuantityChange = (index, e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      onUpdateItem(index, value);
    }
  };

  const handleDiscountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setDiscount(value);
    }
  };

  const applyDiscount = () => {
    const total = calculateTotal();
    const discountedTotal = total - discount;
    setFinalTotal(discountedTotal > 0 ? discountedTotal : 0);
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
      <div className="border rounded-lg shadow-md p-4 ">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {orderItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2 ">
            
            <div className=""> 
            <span className="text-slate-900 text-lg">{item.name}</span>
            <br></br>
            <Select defaultValue="หวานปกติ"  className="text-slate-900 text-sm" 
             options={[
                { value: '1', label: 'หวานปกติ' },
                { value: '2', label: 'หวาน 50%' },
                { value: '3', label: 'หวาน 25%' },
              ]}>
            </Select>
            <Select 
            defaultValue="ใส่แก้ว"  
            className="text-slate-900 text-sm ml-2" 
            options={[
                { value: '1', label: 'ใส่แก้ว' },
                { value: '2', label: 'ใส่ขวด' },
                { value: '3', label: 'แยกน้ำ ใส่แก้ว' },
              ]}>
            </Select>
            </div>
            
           
            
            <div className="flex items-center">
              <button 
                onClick={() => onUpdateItem(index, item.quantity - 1)} 
                className="px-2 py-2 border rounded-lg mr-1" 
                disabled={item.quantity <= 0} // Disable if quantity is 0
              > 
                - 
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
                className="mx-2 w-16 text-center border rounded-lg p-1"
              />
              <button 
                onClick={() => onUpdateItem(index, item.quantity + 1)} 
                className="px-2 py-2 ml-1 border rounded-lg"
              > 
                + 
              </button>
              <button 
                onClick={() => onRemoveItem(index)}
                className="ml-2 text-red-500"
              >
                <FaTrashAlt />
              </button>
             
            </div>
          </div>
        ))}
        <hr style={{marginTop:20,marginBottom:20,borderColor:"black"}} />
        <div className="mt-4 flex flex-col items-end">
          <div className=" flex items-center mb-4">
            <input
              type="number"
              value={discount}
              onChange={handleDiscountChange}
              placeholder="Enter discount"
              className="w-32 text-center border rounded-lg p-1 mr-2"
            />
            <Button 
              type="primary" 
              onClick={applyDiscount}
              className="p-5 text-lg"
            >
              Apply Discount
            </Button>
          </div>
          <table className="text-lg">
            <tr>
                <td>Total: </td>
                <td>฿{calculateTotal().toFixed(2)}</td>
            </tr>
            <tr>
                <td>Discount: </td>
                <td>฿{discount.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Net Total: </td>
                <td>฿{finalTotal.toFixed(2)}</td>
            </tr>
          </table>
          
        
          <br />
          <Button type="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
