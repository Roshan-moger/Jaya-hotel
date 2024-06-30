import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (items) => {
    const updatedCartItems = [...cartItems];

    items.forEach(newItem => {
      const existingItemIndex = updatedCartItems.findIndex(item => item.name === newItem.name);
      
      if (existingItemIndex !== -1) {
        updatedCartItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        updatedCartItems.push(newItem);
      }
    });

    setCartItems(updatedCartItems);
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isCartEmpty = cartItems.length === 0;

  const incrementQuantity = (name) => {
    setCartItems(cartItems.map(item =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (name) => {
    setCartItems(cartItems.map(item =>
      item.name === name && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotal, isCartEmpty , incrementQuantity,decrementQuantity,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
