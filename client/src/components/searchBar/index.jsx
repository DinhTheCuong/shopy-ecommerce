import React, { useState, useContext } from 'react';
import { AppContext } from '../../App';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';

import './style.css';

const SearchBar = () => {
  const appValue = useContext(AppContext);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleGetValue = (value) => {
    const res = appValue.data.filter(
      (product) =>
        value &&
        product &&
        product.title &&
        product.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(res);
  };

  const handleChange = (value) => {
    console.log(searchResult);
    setSearchInput(value);
    handleGetValue(value);
  };

  return (
    <div className='search-bar'>
      <div className='header-search hide-on-tablet hide-on-mobile'>
        <RiSearchLine className='search-icon' />
        <input
          type='text'
          id='search-input'
          className='header-search-input'
          placeholder='Search Products...'
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />

        {/* <button className='header-search-btn'>Search</button> */}
      </div>
      {searchInput.length > 0 ? (
        <>
          <IoCloseSharp
            onClick={() => {
              document.getElementById('search-input').value = null;
              document.getElementById('search-result').classList.add('hide');
              document.getElementById('search-del-icon').classList.add('hide');
            }}
            className='search-del-icon'
            id='search-del-icon'
          />
          <div
            id='search-result'
            className='search-result'
          >
            <p className='search-result-header'>Search Result</p>
            <div className='search-result-container'>
              {searchResult.length > 0 ? (
                searchResult.map((prod) => (
                  <Link
                    to='/product-detail'
                    onClick={() => {
                      appValue.handleGetProd(prod);
                      document.getElementById('search-input').value = '';
                      document
                        .getElementById('search-del-icon')
                        .classList.add('hide');
                      document
                        .getElementById('search-result')
                        .classList.add('hide');
                    }}
                    key={prod._id}
                    className='search-result-card'
                  >
                    <img
                      src={prod.images[0]}
                      alt=''
                      className='search-result-img'
                    />
                    <p className='search-result-title'>{prod.title}</p>
                  </Link>
                ))
              ) : (
                <div className='search-result-card'>No products found...</div>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
