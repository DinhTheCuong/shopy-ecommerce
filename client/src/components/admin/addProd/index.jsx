import './style.css';
import React from 'react';
import { useState, useEffect } from 'react';

const AddProd = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <div className='add-product'>
      <p className='prod-mng-title'>Add Product</p>
      <form className='add-prod-form'>
        <div className='add-prod-form-input'>
          <label>Product Name</label>
          <input
            placeholder='Product name'
            type='text'
          />
        </div>

        <div className='add-prod-double-input'>
          <div className='add-prod-form-input'>
            <label>Category</label>
            <input
              placeholder='Category'
              type='text'
            />
          </div>
          <div className='add-prod-form-input'>
            <label>Brand</label>
            <input
              placeholder='Brand'
              type='text'
            />
          </div>
        </div>

        <div className='add-prod-double-input'>
          <div className='add-prod-form-input'>
            <label>Product price</label>
            <input
              placeholder='Product price'
              type='number'
            />
          </div>
          <div className='add-prod-form-input'>
            <label>Discount percentage</label>
            <input
              placeholder='Discount percentage'
              type='number'
            />
          </div>
        </div>

        <div
          className='add-prod-form-input'
          id='prod-img'
        >
          <label htmlFor='prod-img-input'>
            Product Image
          </label>
          <input
            id='prod-img-input'
            type='file'
            multiple
            accept='image/*'
            onChange={onImageChange}
          />
          <div className='prod-img-container'>
            {imageURLS.map((imageSrc) => (
              <img
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
            placeholder='Description'
            type='img'
          />
        </div>
        <button className='add-prod-btn'>Add</button>
      </form>
    </div>
  );
};

export default AddProd;
