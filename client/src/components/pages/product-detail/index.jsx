import React, { useContext } from 'react';
import './style.css';
import { AppContext } from '../../../App';
import Slider from 'react-slick';

const ProductDetail = () => {
  const appValue = useContext(AppContext);
  const prod = appValue.singleProd;
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className='product-detail-page'>
      <div className='prod-detail-section'>
        <div className='prod-detail-thumb'>
          <Slider {...settings}>
            {prod.images.map((ele) => (
              <img
                key={ele}
                src={ele}
                alt='Product Thumbnail'
              />
            ))}
          </Slider>
        </div>
        <div className='prod-detail-content'>
          <p className='prod-detail-category'>
            {prod.category}
          </p>
          <p className='prod-detail-title'>{prod.title}</p>
          <p className='prod-detail-brand'>{prod.brand}</p>
          <p className='prod-detail-price'>
            {prod.price.$numberDecimal} $
          </p>
          <p className='prod-detail-description'>
            {prod.description}
          </p>
          <p className='prod-detail-amount'>
            <span>-</span>1<span>+</span>
          </p>
          <button
            className='prod-detail-btn'
            onClick={() => appValue.handleAddToCart(prod)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className='prod-detail-sub'>
        <div className='pro-intro'>
          <p className='prod-intro-title'>Introduction</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Natus officia libero veritatis
            aliquam quis, ab animi totam neque asperiores
            quidem dignissimos deserunt aspernatur adipisci
            sapiente aut accusantium est, minima in. Lorem
            ipsum dolor sit amet consectetur, adipisicing
            elit. Placeat quaerat cupiditate corporis
            expedita eaque nemo esse in. Inventore nemo non
            totam laboriosam ad voluptatum, reiciendis quas,
            optio tempore magnam repellendus.
          </p>
        </div>
        <div className='pro-intro'>
          <p className='prod-intro-title'>Features</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Natus officia libero veritatis
            aliquam quis, ab animi totam neque asperiores
            quidem dignissimos deserunt aspernatur adipisci
            sapiente aut accusantium est, minima in. Lorem
            ipsum dolor sit amet, consectetur adipisicing
            elit. Accusantium obcaecati odio aspernatur,
            quisquam sapiente doloribus, illo nisi delectus
            tempore veritatis voluptatem ea placeat, tenetur
            maiores necessitatibus. Voluptate repudiandae
            assumenda illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
