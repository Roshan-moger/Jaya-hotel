import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import '../../Styles/soups.css';

const SoupNonVeg = () => {
  const [quantities, setQuantities] = useState({
    chickenClearSoup: 0,
    chickenManchowSoup: 0,
    hotSourChickenSoup: 0,
    chickenHotSourSoup: 0,
  });

  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (soup, action) => {
    setQuantities(prevQuantities => {
      const newQuantity = action === 'increase' 
        ? prevQuantities[soup] + 1 
        : Math.max(prevQuantities[soup] - 1, 0);
      return { ...prevQuantities, [soup]: newQuantity };
    });
  };

  const handleAddToCart = () => {
    const itemsToAdd = [
      { name: 'Chicken Clear Soup', quantity: quantities.chickenClearSoup, price: 110, image: 'Assets/nonvegSoup/13paya-soup.jpg' },
      { name: 'Chicken Manchow Soup', quantity: quantities.chickenManchowSoup, price: 120, image: 'Assets/nonvegSoup/manchow-chicken-soup.jpg' },
      { name: 'Hot & Sour Chicken Soup', quantity: quantities.hotSourChickenSoup, price: 100, image: 'Assets/nonvegSoup/Nattu-Kozhi-soup.jpg' },
      { name: 'Chicken Hot & Sour Soup', quantity: quantities.chickenHotSourSoup, price: 130, image: 'Assets/nonvegSoup/oesoh3gddiedh_bigger.jpg' },
    ].filter(item => item.quantity > 0);
    addToCart(itemsToAdd);
    setQuantities({
      chickenClearSoup: 0,
      chickenManchowSoup: 0,
      hotSourChickenSoup: 0,
      chickenHotSourSoup: 0,
    });
  };

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/nonvegSoup/13paya-soup.jpg" className='soupimg' alt="Chicken Clear Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Chicken Clear Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>110</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('chickenClearSoup', 'decrease')}></i> 
            {quantities.chickenClearSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('chickenClearSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />

      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/nonvegSoup/manchow-chicken-soup.jpg" className='soupimg' alt="Chicken Manchow Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Chicken Manchow Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>120</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('chickenManchowSoup', 'decrease')}></i> 
            {quantities.chickenManchowSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('chickenManchowSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />

      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/nonvegSoup/Nattu-Kozhi-soup.jpg" className='soupimg' alt="Hot & Sour Chicken Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Hot & Sour Chicken Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>100</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('hotSourChickenSoup', 'decrease')}></i> 
            {quantities.hotSourChickenSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('hotSourChickenSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />

      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/nonvegSoup/oesoh3gddiedh_bigger.jpg" className='soupimg' alt="Chicken Hot & Sour Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Chicken Hot & Sour Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>130</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('chickenHotSourSoup', 'decrease')}></i> 
            {quantities.chickenHotSourSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('chickenHotSourSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />

      <div className='d-flex justify-content-center'>
        <button className='col-11 addtocart' onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
}

export default SoupNonVeg;
