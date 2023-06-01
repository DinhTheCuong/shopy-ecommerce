import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className='checkout-form'>
      <p className='checkout-form-title'>
        Customer information
      </p>
      <form onSubmit={onSubmit}>
        <div className='checkout-form-item'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='checkout-form-item'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className='checkout-form-item'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='number'
            id='phone'
            name='phone'
            min='0'
            max='99999999999'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='checkout-form-item'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='checkout-form-footer'>
          <Link to='/'>Back to Home Page</Link>
          <button
            type='submit'
            className='checkout-form-btn'
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
