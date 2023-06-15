import React, { useContext } from 'react';
import { AppContext } from '../../App.js';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import StarRating from '../starRating/index.jsx';
import getProd from './getProd.js';
import './style.css';

const ProductsSection = (props) => {
  const navigate = useNavigate();
  const appValue = useContext(AppContext);
  const viewProducts = appValue.data
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

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
                src={element.images[0]}
                alt=''
              />
            </div>
            <div className='product-sub'>
              <StarRating rating={element.rating ? element.rating : 5} />
              <Link
                to='/product-detail/'
                onClick={() => appValue.handleGetProd(element)}
                className='product-name'
              >
                {element.title}
              </Link>
              <p className='product-price'>
                {' '}
                <span>$</span> {element.price.$numberDecimal}
              </p>
            </div>
            <button
              onClick={() => appValue.handleAddToCart(element)}
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
