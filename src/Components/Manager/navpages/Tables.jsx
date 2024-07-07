// src/Tables.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './table.css';

const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];


const Tables = () => {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || {};
    setOrders(storedOrders);
  }, []);

  return (
    <>
      <h1>Jaya Paradise</h1>
      <h3>Table Number</h3>
      <div className="d-flex flex-wrap">
        {arr.map((item, index) => (
          <Link key={index} to={`/order-details/${item}`} className={`table-card col-2 ${orders[item] ? 'has-order' : ''}`}>
            <div>
              <h2>{item}</h2>
              <p>Table No.</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Tables;
