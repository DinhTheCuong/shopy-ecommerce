import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import './style.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';

const Cart = () => {
  const appValue = useContext(AppContext);
  const [cart, setCart] = useState(appValue.homeCart);
  const handleDelete = (id) => {
    setCart(
      cart.filter((element) => element._id !== id),
      toast.error('Removed from cart!')
    );
  };
  appValue.setHomeCart(cart);
  return (
    <div className='cart'>
      <div className='cart-section'>
        <div className='cart-title-column'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className='cart-page-list'>
          {cart.length === 0 ? (
            <div className='cart-empty'>Empty</div>
          ) : (
            cart.map((product) => (
              <div
                className='cart-page-item'
                key={product._id}
              >
                <div className='cart-page-item-sub'>
                  <img
                    src={product.images[0]}
                    alt='product img'
                  />
                  <p>{product.title}</p>
                </div>
                <p className='cart-page-item-price'>
                  {product.price.$numberDecimal} $
                </p>
                <div className='cart-page-item-amount'>
                  <input
                    type='number'
                    min={1}
                    placeholder={product.amount}
                  />
                  <button onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </div>
                <p className='cart-page-item-total'>
                  {product.price.$numberDecimal * product.amount} $
                </p>
              </div>
            ))
          )}
        </div>
        <div className='cart-pay-submit'>
          <Link to='/all-products'>
            <button className='cart-pay-submit-btn'>Continue Shopping</button>
          </Link>
          <div className='cart-pay-subtotal'>
            <p>
              Subtotal: <span>{appValue.totalPrice} $</span>
            </p>
            <Link to='/checkout'>
              <button className='cart-pay-submit-btn'>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
