// import './style.css';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import productActions from '../admin-prod-mng/prodActions';

const EditProd = () => {
  const navigate = useNavigate();
  const appValue = useContext(AppContext);
  const prod = appValue.singleProd;
  const [req, setReq] = useState({});
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const validateForm = () => {
    let valid = true;

    if (
      !req.title ||
      !req.category ||
      !req.brand ||
      !req.price ||
      !req.discountPercentage ||
      !req.description ||
      images.length < 1
    ) {
      valid = false;
    }
    return valid;
  };

  const options = {
    validateForm,
    navigate,
  };

  return (
    <div className='add-product'>
      <p className='prod-mng-title'>Edit Product</p>
      <form className='add-prod-form'>
        <div className='add-prod-form-input'>
          <label>Product Name</label>
          <input
            onChange={(e) => setReq({ ...req, title: e.target.value })}
            placeholder={prod.title}
            type='text'
          />
        </div>

        <div className='add-prod-double-input'>
          <div className='add-prod-form-input'>
            <label>Category</label>
            <input
              onChange={(e) => setReq({ ...req, category: e.target.value })}
              placeholder={prod.category}
              type='text'
            />
          </div>
          <div className='add-prod-form-input'>
            <label>Brand</label>
            <input
              onChange={(e) => setReq({ ...req, brand: e.target.value })}
              placeholder={prod.brand}
              type='text'
            />
          </div>
        </div>

        <div className='add-prod-double-input'>
          <div className='add-prod-form-input'>
            <label>Product price</label>
            <input
              onChange={(e) => setReq({ ...req, price: e.target.value })}
              placeholder={prod.price.$numberDecimal}
              type='number'
              min={0}
            />
          </div>
          <div className='add-prod-form-input'>
            <label>Discount percentage</label>
            <input
              onChange={(e) =>
                setReq({
                  ...req,
                  discountPercentage: e.target.value,
                })
              }
              placeholder={
                prod.discountPercentage.$numberDecimal
                  ? prod.discountPercentage.$numberDecimal
                  : 0
              }
              type='number'
              min={0}
            />
          </div>
        </div>

        <div
          className='add-prod-form-input'
          id='prod-img'
        >
          <label htmlFor='prod-img-input'>Product Image</label>
          <input
            id='prod-img-input'
            type='file'
            multiple
            accept='image/*'
            onChange={onImageChange}
          />
          <div className='prod-img-container'>
            {images.length < 1
              ? prod.images.map((imageSrc) => (
                  <img
                    key={imageSrc}
                    src={imageSrc}
                    alt='not fount'
                    width={'250px'}
                  />
                ))
              : imageURLS.map((imageSrc) => (
                  <img
                    key={imageSrc}
                    src={imageSrc}
                    alt='not fount'
                    width={'250px'}
                  />
                ))}
          </div>
        </div>
        <div className='add-prod-form-input'>
          <label>Description</label>
          <textarea
            onChange={(e) =>
              setReq({
                ...req,
                description: e.target.value,
              })
            }
            placeholder={prod.description}
            type='img'
          />
        </div>

        <div className='update-prod-btn'>
          <button
            onClick={(event) => {
              navigate('/admin-page/products-manager');
            }}
            className='cancel-prod-btn'
          >
            Cancel
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              if (window.confirm('Are you sure?')) {
                productActions.editProduct(prod._id, req, images, options);
              }
            }}
            className='add-prod-btn'
          >
            Update
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              productActions.deleteProduct(prod._id, navigate);
            }}
            className='del-prod-btn'
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProd;
