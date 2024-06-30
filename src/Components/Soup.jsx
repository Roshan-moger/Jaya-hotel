import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import "../Styles/soups.css";
import SoupVeg from './Pages/SoupVeg';
import SoupNonVeg from './Pages/SoupNonVeg';
import { useNavigate } from 'react-router-dom';

const Soup = () => {
  const [activeButton, setActiveButton] = useState('veg');
  const { isCartEmpty } = useContext(CartContext);
  const navigate = useNavigate();

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <h3>
        <p className='icon'>
          <i className="ri-arrow-left-wide-line" onClick={() => navigate("/")}></i>
        </p>
        Soups 
        <span>
          <img 
            src={isCartEmpty ? "shopping_cart.svg" : "after_add_cart.svg"} 
            alt="Cart" 
            onClick={() => navigate("/cart")}
          />
        </span>
      </h3>
      <hr />
      <div className='main'>
        <button
          className={`soup-button ${activeButton === 'veg' ? 'active' : ''}`}
          onClick={() => handleButtonClick('veg')}
        >
          Veg Soup
        </button>
        <button
          className={`soup-button ${activeButton === 'non-veg' ? 'active' : ''}`}
          onClick={() => handleButtonClick('non-veg')}
        >
          Non-Veg Soup
        </button>
      </div>
      
      <div className='main-content my-5'>
        {activeButton === 'veg' 
          ? <SoupVeg /> 
          : <SoupNonVeg />
        }
      </div>
      
    </div>
  );
}

export default Soup;
