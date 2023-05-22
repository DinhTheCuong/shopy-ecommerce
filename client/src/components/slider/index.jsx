import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Slider from 'react-slick';
import {RiArrowDropRightLine} from 'react-icons/ri';

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='slider-item'>
          <img
            src={require('./../../assets/images/slider/slider-1.png')}
            alt=''
          />
        </div>
        <div className='slider-item'>
          <img
            src={require('./../../assets/images/slider/slider-2.png')}
            alt=''
          />
        </div>
        <div className='slider-item'>
          <img
            src={require('./../../assets/images/slider/slider-3.png')}
            alt=''
          />
        </div>
      </Slider>
      <h1 className='slider-item-sub'>
        <span>VR BOX 3D GLASS</span> <br />
        Explore Our Tech <br />
        Collection Perfect <br />
        Gadget
      </h1>
      <button>
        <Link to='/all-products'>
          Shop Now
          <RiArrowDropRightLine className='shop-now-icon' />
        </Link>
      </button>
    </div>
  );
};

export default HomeSlider;
