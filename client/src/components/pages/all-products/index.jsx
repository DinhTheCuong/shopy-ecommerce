import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';
import './style.css';
import { BsBag } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const AllProducts = () => {
  const appValue = useContext(AppContext);
  const viewAllProducts = appValue.data;

  return (
    <div className='all-products'>
      <div className='sidebar-product'>
        <div className='sidebar-product-item'>
          <p className='sidebar-product-item-title'>Categories</p>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Mobile</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Laptop</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Gaming</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Accessorie</p>
          </div>
        </div>
        <div className='sidebar-product-item'>
          <p className='sidebar-product-item-title'>Brands</p>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Apple</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Samsung</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Microsoft</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Lenovo</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>MSI</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Google</p>
          </div>
          <div className='sidebar-categories-item'>
            <input type='checkbox' />
            <p>Others</p>
          </div>
        </div>
      </div>
      <div className='all-products-section'>
        <div className='all-prod-filter'>
          <div className='quantity-result'>
            Showing <span>{viewAllProducts.length}</span> results
          </div>
          <div className='sort'>
            <p>Sort by:</p>
            <select
              name=''
              id=''
            >
              <option value=''>Default</option>
              <option value=''>Price: Low To High</option>
              <option value=''>Price: High To Low</option>
            </select>
          </div>
        </div>
        <div className='all-prod-view'>
          {viewAllProducts.map((prod) => (
            <div
              className='product-card'
              key={prod._id}
            >
              <div className='product-img'>
                <img
                  className='product-thumbnail'
                  src={prod.images[0]}
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
                  onClick={() => appValue.handleGetProd(prod)}
                  className='product-name'
                >
                  {prod.title}
                </Link>
                <p className='product-price'>
                  {' '}
                  <span>$</span> {prod.price.$numberDecimal}
                </p>
              </div>
              <button
                onClick={() => appValue.handleAddToCart(prod)}
                className='btn-add-to-cart'
              >
                <BsBag className='add-to-cart-icon' />
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
