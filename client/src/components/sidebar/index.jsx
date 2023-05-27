import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { RiAccountCircleFill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { AiFillShop } from 'react-icons/ai';
import { MdContactEmergency } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Sidebar = () => {
  const handleCloseSidebar = () => {
    document.getElementById('sidebar').style.display =
      'none';
  };

  return (
    <div
      className='sidebar'
      id='sidebar'
    >
      <div className='sidebar-container'>
        <p className='sidebar-title'>
          SPACE PHONE <br />
          E-COMMERCE
          <MdClose
            className='close-sidebar'
            onClick={handleCloseSidebar}
          />
        </p>
        <div className='sidebar-list'>
          {/* <div className='sidebar-link-list'>
            <Link
              to='/login'
              className='sidebar-link'
            >
              <p>Account</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/'
              className='sidebar-link'
            >
              <p>Home Page</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/all-products'
              className='sidebar-link'
            >
              <p>All Products</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/contact-us'
              className='sidebar-link'
            >
              <p>Contact Us</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/about-us'
              className='sidebar-link'
            >
              <p>About Us</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
          </div>*/}
          <div className='sidebar-category'>
            <Link
              to='/login'
              className='sidebar-item'
            >
              <RiAccountCircleFill className='sidebar-item-icon' />
              <p>Account</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/'
              className='sidebar-item'
            >
              <HiHome className='sidebar-item-icon' />
              <p>Home Page</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/all-products'
              className='sidebar-item'
            >
              <AiFillShop className='sidebar-item-icon' />
              <p>All Products</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/contact-us'
              className='sidebar-item'
            >
              <MdContactEmergency className='sidebar-item-icon' />
              <p>Contact Us</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
            <Link
              to='/about-us'
              className='sidebar-item'
            >
              <BsFillInfoCircleFill className='sidebar-item-icon' />
              <p>About Us</p>
              <RiArrowDropRightLine className='sidebar-item-icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
