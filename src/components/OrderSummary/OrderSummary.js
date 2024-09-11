import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Button, Select } from 'antd';

const OrderSummary = ({ orderItems, onUpdateItem, onRemoveItem }) => {
  
  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPoints, setCustomerPoints] = useState(0);
  const [membershipLevel, setMembershipLevel] = useState('');
  const [isMember, setIsMember] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(calculateTotal());



  const handlePhoneNumberChange = (e) => {
    const phone = e.target.value;
    setPhoneNumber(phone);

    // Simulate a customer lookup based on the phone number
    if (phone === '1234567890') {
      setCustomerName('John Doe');
      setCustomerPoints(100);
      setMembershipLevel('silver'); // หรือ 'gold' ขึ้นอยู่กับระดับสมาชิก
      setIsMember(true);
    } else {
      setCustomerName('');
      setCustomerPoints(0);
      setMembershipLevel('');
      setIsMember(false);
    }
  };

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
    let membershipDiscount = 0;

    // ตรวจสอบระดับสมาชิกเพื่อคำนวณส่วนลด
    if (membershipLevel === 'silver') {
      membershipDiscount = total * 0.05; // ส่วนลด 5% สำหรับ silver
    } else if (membershipLevel === 'gold') {
      membershipDiscount = total * 0.10; // ส่วนลด 10% สำหรับ gold
    }

    const totalDiscount = discount + membershipDiscount;
    const discountedTotal = total - totalDiscount;
    setFinalTotal(discountedTotal > 0 ? discountedTotal : 0);
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div className="border rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

      <h6>ชื่อลูกค้า</h6>
      <input 
        type="text" 
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter phone number"
        className="w-full text-center border rounded-lg p-1 mb-2"
      />

      {isMember ? (
        <div>
          <p><strong>Name:</strong> {customerName}</p>
          <p><strong>Points:</strong> {customerPoints}</p>
          <p><strong>Membership Level:</strong> {membershipLevel.toUpperCase()}</p>
        </div>
      ) : (
        <p className="text-red-500">ไม่มีสมาชิกท่านี้</p>
      )}

      <label>
        <input 
          type="checkbox" 
          checked={!isMember} 
          onChange={() => setIsMember(!isMember)} 
        /> 
        ไม่มีสมาชิก
      </label>

      {orderItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <div>
            <span className="text-slate-900 text-lg">{item.name}</span><br />
            <Select 
              defaultValue="หวานปกติ" 
              className="text-slate-900 text-sm"
              options={[
                { value: '1', label: 'หวานปกติ' },
                { value: '2', label: 'หวาน 50%' },
                { value: '3', label: 'หวาน 25%' },
              ]}
            />
            <Select
              defaultValue="ใส่แก้ว"
              className="text-slate-900 text-sm ml-2"
              options={[
                { value: '1', label: 'ใส่แก้ว' },
                { value: '2', label: 'ใส่ขวด' },
                { value: '3', label: 'แยกน้ำ ใส่แก้ว' },
              ]}
            />
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => onUpdateItem(index, item.quantity - 1)} 
              className="px-2 py-2 border rounded-lg mr-1" 
              disabled={item.quantity <= 0}
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

      <hr className="my-4 border-black" />
      <div className="flex flex-col items-end">
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={discount}
            onChange={handleDiscountChange}
            placeholder="Enter discount"
            className="w-32 text-center border rounded-lg p-1 mr-2"
          />
          <Button type="primary" onClick={applyDiscount} className="p-5 text-lg">
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
          {membershipLevel && (
            <tr>
              <td>Membership Discount: </td>
              <td>
                ฿
                {(membershipLevel === 'silver'
                  ? calculateTotal() * 0.05
                  : membershipLevel === 'gold'
                  ? calculateTotal() * 0.1
                  : 0
                ).toFixed(2)}
              </td>
            </tr>
          )}
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