import React from 'react';
// import HomeSlider from '../../slider';
import Brands from '../../brands';
import ProductsSection from '../../prod-section';
import './style.css';
import News from '../../news';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <News />
        {/* <HomeSlider /> */}
        <Brands />
        <ProductsSection
          bg='linear-gradient(#FFEBD1, #FCB7A0)'
          title='New Arrivals'
        />
        <ProductsSection
          bg='linear-gradient(#51CBFE, #E1FECF)'
          title='Top Selling Products'
        />
        <ProductsSection
          bg='linear-gradient(#FF685F, #D589EC)'
          title='Popular Sales'
        />
      </div>
    </div>
  );
};

export default Home;
