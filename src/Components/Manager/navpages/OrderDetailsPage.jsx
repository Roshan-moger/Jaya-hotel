import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './table.css'; // Ensure you import the CSS file

const OrderDetailsPage = () => {
  const { tableNumber } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || {};
    const details = storedOrders[tableNumber] || [];
    setOrderDetails(details);
  }, [tableNumber]);

  const handleCompleteOrder = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || {};
    delete storedOrders[tableNumber];
    localStorage.setItem('orders', JSON.stringify(storedOrders));
    setOrderDetails([]);
    navigate('/manager'); // Redirect to the tables page
  };

  return (
    <div>
      <h1 className='hrad'>Order Details for Table {tableNumber}</h1>
      <button className='order' onClick={handleCompleteOrder}>Complete Order</button>
      <br /><br />
      {orderDetails.length > 0 ? (
        <div className='all'>
          <div className='orderdetails'>
                      <div className='name'><b>Name</b></div>
              <div className='quant'><b>Quantity</b></div>
              <div className='price'> <b>Price</b></div>
              </div>
          {orderDetails.map((order, index) => (
            <div key={index} className='orderdetails'>
              <div className='name'>{order.name}</div>
              <div className='quant'>{order.quantity}</div>
              <div className='price'>₹{order.price * order.quantity}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found for Table {tableNumber}</p>
      )}
    </div>
  );
};

export default OrderDetailsPage;
