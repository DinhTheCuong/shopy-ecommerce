import React from 'react';
import './style.css';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <div className='footer-list'>
          <p className='footer-list-title'>About Us</p>
          <p className='footer-sub'>
            We know there are a lot of threa developers our but we pride into a
            firm in the industry.
          </p>
        </div>
        <div className='footer-list'>
          <p className='footer-list-title'>Feature</p>
          <a href='' className='footer-link'>
            About Us
          </a>
          <a href='' className='footer-link'>
            Terms Condition
          </a>
          <a href='' className='footer-link'>
            Best Products
          </a>
        </div>
        <div className='footer-list'>
          <p className='footer-list-title'>General Links</p>
          <a href='' className='footer-link'>
            Blog
          </a>
          <a href='' className='footer-link'>
            Tracking Order
          </a>
          <a href='' className='footer-link'>
            Become Seller
          </a>
        </div>
        <div className='footer-list'>
          <p className='footer-list-title'>Helpful</p>
          <a href='' className='footer-link'>
            Helpful
          </a>
          <a href='' className='footer-link'>
            FAQ
          </a>
          <a href='' className='footer-link'>
            Support
          </a>
        </div>
      </div>
      <div className='footer-sign'>
        <div className='footer-sign-left'>
          <div>
            <BsInstagram className='footer-sign-icon' />
            <FaFacebookF className='footer-sign-icon' />
            <AiFillYoutube className='footer-sign-icon' />
          </div>
          <div className='footer-sign-sub'>
            © 2022 <a href=''>Team1-HDT-WEB67</a> All rights reserved
          </div>
        </div>
        <div className='footer-sign-right'>
          <FaCcVisa className='footer-sign-icon' />
          <FaCcMastercard className='footer-sign-icon' />
          <FaCcPaypal className='footer-sign-icon' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
