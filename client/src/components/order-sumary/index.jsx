import React, {useState, useContext} from 'react';
import {AppContext} from '../../App';
import './style.css';

const OrderSumary = ({onPaymentMethodChange}) => {
  const appValue = useContext(AppContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState(null);
  const [products, setProducts] = useState(
    appValue.homeCart,
  );

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    if (onPaymentMethodChange) {
      onPaymentMethodChange(event.target.value);
    }
  };
  return (
    <div className='order-sumary'>
      <p className='order-sumary-title'>Order</p>
      <div className='order-list'>
        {products.length === 0 ? (
          <div className='cart-empty'>
            Please buy something!
          </div>
        ) : (
          products.map((product, index) => (
            <div className='order-item' key={index}>
              <p className='order-item-sub'>
                {product.title}
              </p>
              <p className='order-quantity'>
                {product.price} $
                <span> x {product.amount}</span>
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
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor='paymentMethod1'>
            Cash on delivery
          </label>
        </div>
        <div className='payment-item'>
          <input
            type='radio'
            name='paymentMethod'
            id='paymentMethod2'
            value='bank_transfer'
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor='paymentMethod2'>
            Bank transfer
          </label>
        </div>
        <div className='payment-item'>
          <input
            type='radio'
            name='paymentMethod'
            id='paymentMethod3'
            value='credit_card'
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor='paymentMethod3'>
            Pay by credit card
          </label>
        </div>
      </div>
      <p className='payment-total'>
        Total order value:{' '}
        <span>{appValue.totalPrice} $</span>
      </p>
    </div>
  );
};

export default OrderSumary;
