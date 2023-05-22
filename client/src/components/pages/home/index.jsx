import React from 'react';
import HomeSlider from '../../slider';
import Brands from '../../brands';
import ProductsSection from '../../prod-section';
import './style.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <HomeSlider />
        <Brands />
        <ProductsSection title='New Arrivals' />
        <ProductsSection title='Top Selling Products' />
        <ProductsSection title='Popular Sales' />
      </div>
    </div>
  );
};

export default Home;
