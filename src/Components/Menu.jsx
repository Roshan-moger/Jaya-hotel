import React from 'react';
import 'remixicon/fonts/remixicon.css';
import '../Styles/menu.css';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="heading">
        <h1 className="headline mb-3">Jaya Paradise</h1>
        <p className='m-1 working'>Working Time</p>
        <p className="working"><i className="ri-time-line"></i> 08:00 am - <i className="ri-time-line"></i> 12:00 pm</p>
      </div>
      <div>
        <h3 className="menu">MENU CARD <img src="shopping_cart.svg" alt=""  onClick={()=>navigate('/cart')}/></h3> 
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="team-card" onClick={()=>navigate("/beverages")}>
          <div className="team-image">
            <img src="Beverages.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Beverages</h3>
          </div>
        </div>
        <div className="team-card" onClick={()=>navigate("/jayaSpecials")}>
          <div className="team-image">
            <img src="Jaya Special.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Jaya Specials</h3>
          </div>
        </div>
        <div className="team-card"onClick={()=>navigate("/soup")} >
          <div className="team-image">
            <img src="Soup.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Soup</h3>
          </div>
        </div>
        <div className="team-card" onClick={()=>navigate("/nonvegStarters")}>
          <div className="team-image">
            <img src="Non Veg Starters.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Non-Veg Starters</h3>
          </div>
        </div>
        <div className="team-card"  onClick={()=>navigate("/vegStarters")}>
          <div className="team-image">
            <img src="food-app-icon-0.jpg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Veg Starters</h3>
          </div>
        </div>
        <div className="team-card" onClick={()=>navigate("/salad")}>
          <div className="team-image">
            <img src="Salad.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Salad</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Main Course Non Veg.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Main Course Non-Veg</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Main Course  Veg.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Main Course Veg</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Rice.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Rice</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Breads.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Roties</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Noodles.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Noodles</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Fish.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Fish</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Biryani.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Biryani</h3>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src="Meals.svg" alt="Ice Cream"/>
          </div>
          <div className="team-detail">
            <h3>Meals</h3>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Menu;
