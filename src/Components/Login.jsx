import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./../Styles/login.css"

const Login = () => {
    const [name, setName] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // const history = useHistory();
  const navigate=useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && tableNumber && phoneNumber) {
        localStorage.setItem('tableNumber', tableNumber);
        // Redirect to another page after login
        // history.push('/manager/tables'); 
        // Replace with your target route
        navigate("/menu")
      }
    };
  
    return (
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tableNumber">Table Number</label>
            <input
              type="text"
              id="tableNumber"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='button'>Login</button>
        </form>
      </div>
    );
  };
export default Login