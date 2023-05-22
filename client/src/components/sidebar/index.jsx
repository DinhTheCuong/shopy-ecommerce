import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {RiArrowDropRightLine} from 'react-icons/ri';
import {CiMobile3} from 'react-icons/ci';
import {MdClose} from 'react-icons/md';
import {CiLaptop} from 'react-icons/ci';
import {IoGameControllerOutline} from 'react-icons/io5';
import {CiPalette} from 'react-icons/ci';

const Sidebar = () => {
  const handleCloseSidebar = () => {
    const x = (document.getElementById(
      'sidebar',
    ).style.display = 'none');
  };

  return (
    <div className='sidebar' id='sidebar'>
      <div className='sidebar-container'>
        <p className='sidebar-title'>
          Navigation
          <MdClose
            className='close-sidebar'
            onClick={handleCloseSidebar}
          />
        </p>
        <div className='sidebar-list'>
          <div className='sidebar-link-list'>
            <Link to='/' className='sidebar-link'>
              <p>Home Page</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/all-products'
              className='sidebar-link'>
              <p>All Products</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link to='/contact-us' className='sidebar-link'>
              <p>Contact Us</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link to='/about-us' className='sidebar-link'>
              <p>About Us</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
          </div>
          <div className='sidebar-category'>
            <p className='sidebar-category-title'>
              Category
            </p>
            <Link
              to='/all-products'
              className='sidebar-item'>
              <CiMobile3 className='sidebar-item-icon' />
              <p>Mobile</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/all-products'
              className='sidebar-item'>
              <CiLaptop className='sidebar-item-icon' />
              <p>Laptop</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/all-products'
              className='sidebar-item'>
              <IoGameControllerOutline className='sidebar-item-icon' />
              <p>Gaming</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/all-products'
              className='sidebar-item'>
              <CiPalette className='sidebar-item-icon' />
              <p>Accessories</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
