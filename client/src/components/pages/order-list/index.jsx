import './style.css';
import img from '../../../assets/images/products/product-img-1.jpg';

const Order = () => {
  return (
    <div className='order-page'>
      <p className='order-page__title'>Purchase Order</p>
      <div className='order-page__content'>
        <div className='order-page__item'>
          <img
            src={img}
            alt=''
          />
          <div className='order-page__item-sub'>
            <div className='order-page__item-top'>
              <p className='order-page__item-title'>Order Item</p>
              <p className='order-page__item-price'>
                $ 1234 <span>x 10</span>
              </p>
            </div>
            <div className='order-page__item-bot'>
              <p className='order-page__item-date'>
                Order Date: <span>01/01/2022</span>
              </p>
              <p className='order-page__item-status'>PAID</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
