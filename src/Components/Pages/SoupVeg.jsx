import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import '../../Styles/soups.css';

const SoupVeg = () => {
  const [quantities, setQuantities] = useState({
    vegClearSoup: 0,
    tomatoSoup: 0,
    vegHotSourSoup: 0,
    mushroomSoup: 0,
    vegManchurianSoup: 0
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
      { name: 'Veg Clear Soup', quantity: quantities.vegClearSoup, price: 130, image: 'Assets/vegSoup/Veg Soup.svg' },
      { name: 'Tomato Soup', quantity: quantities.tomatoSoup, price: 150, image: 'Assets/vegSoup/Tomato Soup.svg' },
      { name: 'Veg Hot & Sour Soup', quantity: quantities.vegHotSourSoup, price: 115, image: 'Assets/vegSoup/Veg Hot & Sour Soup.svg' },
      { name: 'Mushroom Soup', quantity: quantities.mushroomSoup, price: 110, image: 'Assets/vegSoup/Mushroom Soup.svg' },
      { name: 'Veg Manchurian Soup', quantity: quantities.vegManchurianSoup, price: 125, image: 'Assets/vegSoup/Veg Manchurian Soup.svg' },
    ].filter(item => item.quantity > 0);

    addToCart(itemsToAdd);

    setQuantities({
      vegClearSoup: 0,
      tomatoSoup: 0,
      vegHotSourSoup: 0,
      mushroomSoup: 0,
      vegManchurianSoup: 0
    });
  };

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/vegSoup/Veg Soup.svg" className='soupimg' alt="Veg Clear Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Veg Clear Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>130</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('vegClearSoup', 'decrease')}></i> 
            {quantities.vegClearSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('vegClearSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />

      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/vegSoup/Tomato Soup.svg" className='soupimg' alt="Tomato Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Tomato Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>150</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('tomatoSoup', 'decrease')}></i> 
            {quantities.tomatoSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('tomatoSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />

      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/vegSoup/Veg Hot & Sour Soup.svg" className='soupimg' alt="Veg Hot & Sour Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Veg Hot & Sour Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>115</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('vegHotSourSoup', 'decrease')}></i> 
            {quantities.vegHotSourSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('vegHotSourSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />
      
      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/vegSoup/Mushroom Soup.svg" className='soupimg' alt="Mushroom Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Mushroom Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>110</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('mushroomSoup', 'decrease')}></i> 
            {quantities.mushroomSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('mushroomSoup', 'increase')}></i>
          </p>
        </div>
      </div>
      <hr />
      
      <div className='d-flex justify-content-center'>
        <div>
          <img src="Assets/vegSoup/Veg Manchurian Soup.svg" className='soupimg' alt="Veg Manchurian Soup" />
        </div>
        <div className='col-8 description'> 
          <h6>Veg Manchurian Soup</h6>
          <p className='money'><i className="ri-money-rupee-circle-line"></i>125</p>
          <p className="quantity">
            <i className="ri-subtract-line" onClick={() => handleQuantityChange('vegManchurianSoup', 'decrease')}></i> 
            {quantities.vegManchurianSoup} 
            <i className="ri-add-line" onClick={() => handleQuantityChange('vegManchurianSoup', 'increase')}></i>
          </p>
        </div>
      </div>

      <div className='d-flex justify-content-center'>
        <button className='col-11 addtocart' onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
}

export default SoupVeg;
