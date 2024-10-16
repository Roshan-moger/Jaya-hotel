// src/Cart.js
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Components/CartContext';
import { useNavigate } from 'react-router-dom';
import '../Styles/soups.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, calculateTotal, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState(() => localStorage.getItem('tableNumber') || '');

  const handleOrderNow = () => {
    if (tableNumber) {
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || {};
      existingOrders[tableNumber] = cartItems;
      localStorage.setItem('orders', JSON.stringify(existingOrders));
    }
    clearCart();
    navigate("/menu");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleRemove = (name) => {
    removeFromCart(name);
  };

  const handleIncrement = (name) => {
    incrementQuantity(name);
  };

  const handleDecrement = (name) => {
    decrementQuantity(name);
  };

  useEffect(() => {
    const cartContainer = document.querySelector('.cart');
  
    if (isOpen && cartContainer) {
      cartContainer.classList.add('blur');
    } else {
      cartContainer?.classList.remove('blur');
    }
  
    return () => {
      cartContainer?.classList.remove('blur');
    };
  }, [isOpen]);

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    width: '90%',
    maxWidth: '600px',
    zIndex: '1000',
  };

  const imageStyles = {
    width: '100px',
    height: '100px',
    display: 'block',
    margin: '0 auto',
  };

  const headerStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const paragraphStyles = {
    fontSize: '14px',
    lineHeight: '1.5',
    textAlign: 'center',
    marginBottom: '20px',
    color:'#8a8585'
  };

  const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    backgroundColor: '#F4923B',
    color: 'white',
    border: 'none',
    marginTop: '10px',
  };

  return (
    <>
      <div className='cart-container cart'>
        <h3>
          <p className='icon'><i className="ri-arrow-left-wide-line" onClick={() => navigate(-1)}></i></p>
          CheckOut
        </h3>
        <hr />

        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className='d-flex justify-content-center'>
                  <div>
                    <img src={item.image} className='soupimg' alt={item.name} />
                  </div>
                  <div className='col-8 description'>
                    <h6>{item.name}</h6>
                    <p className='money'><i className="ri-money-rupee-circle-line"></i>{item.price}</p>
                    <p className="quantity">
                      <i className="ri-subtract-line" onClick={() => handleDecrement(item.name)}></i>
                      {item.quantity}
                      <i className="ri-add-line" onClick={() => handleIncrement(item.name)}></i>
                      <span>
                        <i className="ri-delete-bin-6-line" onClick={() => handleRemove(item.name)}></i>
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
            <div className='orderDetails col-11'>
              <h4>Order Details</h4>
              <br />
              <p>Item Total <span>₹{calculateTotal()} </span></p>
              <p>Tax <span>₹30</span></p>
              <hr />
              <h4>Grand Total <span>₹{calculateTotal()+30} </span></h4>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='col-11 orderNow' onClick={openModal}>Order Now</button>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <dialog id="modal" open onClick={closeModal} onKeyDown={handleEscapeKey} style={modalStyles}>
          <img src="done.svg" alt="" style={imageStyles} />
          <h3 style={headerStyles}>Order Placed Successfully</h3>
          <p style={paragraphStyles}>You have successfully placed your order.</p>
          <button id="closeModal" onClick={handleOrderNow} style={buttonStyles}>Go to Menu Page</button>
        </dialog>
      )}
    </>
  );
}

export default Cart;
