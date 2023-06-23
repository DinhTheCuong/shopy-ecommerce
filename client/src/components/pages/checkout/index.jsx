import React, { useState, useContext } from 'react';
import { AppContext } from '../../../App';
import CheckoutForm from '../../checkout-form';
import OrderSummary from '../../order-sumary';
import createOrder from './creatOrder';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Checkout = () => {
  const navigate = useNavigate();
  const appValue = useContext(AppContext);
  const [payMethod, setPayMethod] = useState(false);
  const prodInfo = appValue.homeCart.map((prod) => ({
    id: prod._id,
    amount: prod.amount,
    time: new Date().toLocaleString('vi-VN'),
  }));
  const options = {
    navigate,
  };
  const user = JSON.parse(localStorage.getItem('user'));

  const handlePay = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please Login First!');
      return;
    }

    if (user && appValue.homeCart.length > 0 && payMethod) {
      window.confirm('Agree to pay?');
      createOrder(prodInfo, options);
      alert('Order Successfully!');
    } else {
      alert('Invalid information!');
    }
  };

  const handlePayMethod = (payMethod) => {
    setPayMethod(!!payMethod);
  };

  return (
    <div className='checkout-page'>
      <OrderSummary onPayMethod={handlePayMethod} />
      <CheckoutForm onSubmit={handlePay} />
    </div>
  );
};

export default Checkout;
