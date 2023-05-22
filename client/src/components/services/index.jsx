import React, {Fragment} from 'react';
import './style.css';
import {MdOutlineLocalShipping} from 'react-icons/md';
import {GrPowerCycle} from 'react-icons/gr';
import {GrSecure} from 'react-icons/gr';
import {TfiCup} from 'react-icons/tfi';

const Services = () => {
  return (
    <Fragment>
      <div className='services'>
        <div className='services-list'>
          <div className='service-item'>
            <MdOutlineLocalShipping className='service-icon' />
            <div>
              <p className='service-name'>Free Shipping</p>
              <p className='service-sub'>
                When ordering over $100
              </p>
            </div>
          </div>
          <div className='service-item'>
            <GrPowerCycle className='service-icon' />
            <div>
              <p className='service-name'>Free Return</p>
              <p className='service-sub'>
                Get Return within 30 days
              </p>
            </div>
          </div>
          <div className='service-item'>
            <GrSecure className='service-icon' />
            <div>
              <p className='service-name'>Secure Payment</p>
              <p className='service-sub'>
                100% Secure Online Payment
              </p>
            </div>
          </div>
          <div className='service-item'>
            <TfiCup className='service-icon' />
            <div>
              <p className='service-name'>Best Quality</p>
              <p className='service-sub'>
                Original Product Guarenteed
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require('../../assets/images/logo.png')}
        alt=''
        className='service-logo'
      />
    </Fragment>
  );
};

export default Services;
