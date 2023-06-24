import React, { useState, useContext } from 'react';
import { AppContext } from '../../App';
import './style.css';
import noOrder from '../../assets/images/placeholder/no-pay.png';

const OrderSumary = ({ onPayMethod }) => {
  const appValue = useContext(AppContext);
  const [method, setMethod] = useState(null);
  const products = appValue.homeCart;

  const handlePayMethod = (event) => {
    setMethod(event.target.value);
    if (onPayMethod) {
      onPayMethod(event.target.value);
    }
  };
  return (
    <div className='order-sumary'>
      <p className='order-sumary-title'>Order</p>
      <div className='order-list'>
        {products.length === 0 ? (
          <div className='cart-empty'>
            <img
              className='no-pay-img'
              src={noOrder}
              alt=''
            />
          </div>
        ) : (
          products.map((product) => (
            <div
              className='order-item'
              key={product._id}
            >
              <p className='order-item-sub'>{product.title}</p>
              <p className='order-quantity'>
                {product.price.$numberDecimal} $<span> x {product.amount}</span>
              </p>
            </div>
          ))
        )}
      </div>
      <p className='payment-title'>Payment methods</p>
      <div className='payment-methods'>
        <div className='payment-item'>
          <input
            type='radio'
            name='paymentMethod'
            id='paymentMethod1'
            value='delivery'
            onChange={handlePayMethod}
          />
          <label htmlFor='paymentMethod1'>Cash on delivery</label>
        </div>
        <div className='payment-item'>
          <input
            type='radio'
            name='paymentMethod'
            id='paymentMethod2'
            value='bank_transfer'
            onChange={handlePayMethod}
          />
          <label htmlFor='paymentMethod2'>Bank transfer</label>
        </div>
        <div className='payment-item'>
          <input
            type='radio'
            name='paymentMethod'
            id='paymentMethod3'
            value='credit_card'
            onChange={handlePayMethod}
          />
          <label htmlFor='paymentMethod3'>Pay by credit card</label>
        </div>
      </div>
      <p className='payment-total'>
        Total order value: <span>{appValue.totalPrice} $</span>
      </p>
    </div>
  );
};

export default OrderSumary;
