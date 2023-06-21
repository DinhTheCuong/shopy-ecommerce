import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  return (
    <div className='checkout-form'>
      <p className='checkout-form-title'>Customer information</p>
      <form>
        <div className='checkout-form-item'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Full name...'
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className='checkout-form-item'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            name='address'
            placeholder='Address...'
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
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
            placeholder='Phone number...'
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className='checkout-form-item'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email...'
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className='checkout-form-footer'>
          <Link to='/'>Back to Home Page</Link>
          <button
            type='button'
            className='checkout-form-btn'
            onClick={(e) => onSubmit(e)}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
