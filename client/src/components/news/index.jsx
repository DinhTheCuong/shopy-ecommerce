import React from 'react';
import './style.css';

const News = () => {
  return (
    <div className='home-news'>
      <div className='news-cart-left'>
        <p>
          New <br /> <span>Apple</span> iPhone 14
        </p>
        <a href='/'>Shop Now</a>
      </div>
      <div className='news-cart-right'>
        <div className='news-cart-right-top'></div>
        <div className='news-cart-right-bottom'></div>
      </div>
    </div>
  );
};

export default News;
