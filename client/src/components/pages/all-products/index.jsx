import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';
import StarRating from '../../starRating';
import './style.css';
import { BsBag } from 'react-icons/bs';
import filter from './filterProd';

const AllProducts = () => {
  const appValue = useContext(AppContext);
  const allProducts = appValue.data;

  const [products, setProducts] = useState(allProducts);

  console.log(products);

  return (
    <div className='all-products'>
      <div className='sidebar-product'>
        <div className='sidebar-product-item'>
          <p className='sidebar-product-item-title'>Categories</p>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='category'
              id='all'
              onChange={() => setProducts(allProducts)}
              defaultChecked
            />
            <label htmlFor='all'>All</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='category'
              id='mobile'
              onChange={(e) =>
                filter(
                  e.target.value,
                  'category',
                  'mobile',
                  products,
                  setProducts
                )
              }
            />
            <label htmlFor='mobile'>Mobile</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='category'
              id='laptop'
              onChange={(e) =>
                filter(
                  e.target.value,
                  'category',
                  'laptop',
                  products,
                  setProducts
                )
              }
            />
            <label htmlFor='laptop'>Laptop</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='category'
              id='watch'
              onChange={(e) =>
                filter(
                  e.target.value,
                  'category',
                  'watch',
                  products,
                  setProducts
                )
              }
            />
            <label htmlFor='watch'>Watch</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='category'
              id='accessories'
              onChange={(e) =>
                filter(
                  e.target.value,
                  'category',
                  'accessories',
                  products,
                  setProducts
                )
              }
            />
            <label htmlFor='accessories'>Accessories</label>
          </div>
        </div>
        <div className='sidebar-product-item'>
          <p className='sidebar-product-item-title'>Brands</p>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='brand'
              id='allBrands'
              onChange={() => setProducts(allProducts)}
              defaultChecked
            />
            <label htmlFor='allBrands'>All</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='brand'
              id='apple'
              onChange={(e) =>
                filter(e.target.value, 'brand', 'apple', products, setProducts)
              }
            />
            <label htmlFor='apple'>Apple</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='brand'
              id='samsung'
              onChange={(e) =>
                filter(
                  e.target.value,
                  'brand',
                  'samsung',
                  products,
                  setProducts
                )
              }
            />
            <label htmlFor='samsung'>Samsung</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='brand'
              id='msi'
              onChange={(e) =>
                filter(e.target.value, 'brand', 'msi', products, setProducts)
              }
            />
            <label htmlFor='msi'>MSI</label>
          </div>
          <div className='sidebar-categories-item'>
            <input
              type='radio'
              name='brand'
              id='others'
              onChange={(e) =>
                filter(
                  e.target.value,
                  'category',
                  'accessories',
                  products,
                  setProducts
                )
              }
            />
            <label htmlFor='others'>Others</label>
          </div>
        </div>
      </div>
      <div className='all-products-section'>
        <div className='all-prod-filter'>
          <div className='quantity-result'>
            Showing <span>{products.length}</span> results
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
          {products.map((prod) => (
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
                <StarRating rating={prod.rating ? prod.rating : 5} />
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
