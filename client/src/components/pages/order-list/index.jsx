import './style.css';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../App.js';
import getOrderList from './getOrderList';

const Order = () => {
  const [confirmUser, setConfirmUser] = useState(false);
  const [orders, setOrders] = useState([]);

  const oL = [];

  const appValue = useContext(AppContext);
  const dataProd = appValue.data;
  const orderContent = appValue.orderData;

  const userId = orderContent.map((data) => data.userOrder);
  const USER_ID = JSON.parse(localStorage.getItem('user')).id;

  orderContent.map((data) => oL.push(...data.listOrder));
  useEffect(() => {
    if (userId.map((u) => u._id === USER_ID)) {
      setConfirmUser(true);
      setOrders(oL);
    }
  }, []);

  return (
    <div className='order-page'>
      <p className='order-page__title'>Purchase Order</p>
      <div className='order-page__content'>
        {confirmUser && oL.length > 0 ? (
          oL.map((e, index) => (
            <div
              key={index}
              className='order-page__item'
            >
              <img
                src={dataProd.find((p) => p._id === e.id).images[0]}
                alt=''
              />
              <div className='order-page__item-sub'>
                <div className='order-page__item-top'>
                  <p className='order-page__item-title'>
                    {dataProd.find((p) => p._id === e.id).title}
                  </p>
                  <p className='order-page__item-price'>
                    ${' '}
                    {dataProd.find((p) => p._id === e.id).price.$numberDecimal}{' '}
                    <span>x {e.amount}</span>
                  </p>
                </div>
                <div className='order-page__item-bot'>
                  <p className='order-page__item-date'>
                    Order Date: <span>{e.time}</span>
                  </p>
                  <p className='order-page__item-status'>PAID</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Haven't bought anything yet!</div>
        )}
      </div>
    </div>
  );
};

export default Order;
