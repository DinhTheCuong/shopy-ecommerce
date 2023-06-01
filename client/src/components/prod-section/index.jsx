import React, { useContext } from 'react';
import { AppContext } from '../../App.js';
import { Link } from 'react-router-dom';
import './style.css';
import { BsArrowRight } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const ProductsSection = (props) => {
  const appValue = useContext(AppContext);
  const viewProducts = appValue.data;
  return (
    <div
      className='products-section'
      style={{ backgroundImage: props.bg }}
    >
      <div className='products-section-title'>
        <p>{props.title}</p>
        <Link
          to='/all-products'
          href=''
        >
          View More
          <BsArrowRight className='view-more-icon' />
        </Link>
      </div>
      <div className='products-sheft'>
        {viewProducts.map((element) => (
          <div
            className='product-card'
            key={element._id}
          >
            <div className='product-img'>
              <img
                className='product-thumbnail'
                src={element.thumbnail}
                alt=''
              />
            </div>
            <div className='product-sub'>
              <div>
                <AiFillStar className='product-star-icon' />
                <AiFillStar className='product-star-icon' />
                <AiFillStar className='product-star-icon' />
              </div>
              <Link
                to='/product-detail'
                onClick={() =>
                  appValue.handleGetProd(element)
                }
                className='product-name'
              >
                {element.title}
              </Link>
              <p className='product-price'>
                {' '}
                <span>$</span>{' '}
                {element.price.$numberDecimal}
              </p>
            </div>
            <button
              onClick={() =>
                appValue.handleAddToCart(element)
              }
              className='btn-add-to-cart'
            >
              <BsBag className='add-to-cart-icon' />
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
