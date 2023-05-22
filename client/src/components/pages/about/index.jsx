import React from 'react';
import './style.css';
import {RiArrowDropRightLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <p className='about-title'>About Us</p>
      <div className='about-section'>
        <img
          src={require('../../../assets/images/about-ecommerce.png')}
          alt=''
        />
        <div className='about-sub'>
          <p className='about-sub-title'>
            What is e-commerce business?
          </p>
          <p className='about-sub-content'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Consectetur, amet nisi rem
            voluptatem quas nesciunt a ullam error, itaque
            molestiae odio necessitatibus eaque! Omnis
            eveniet inventore quia praesentium impedit?
            Autem! <br />
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Perferendis rerum hic aliquid
            quidem repellendus tempora at culpa doloremque
            dignissimos sunt magnam, ea ex distinctio nulla
            beatae omnis ipsum voluptates saepe.
          </p>
          <button className='about-btn'>
            <Link to='/about-us'>
              About Us
              <RiArrowDropRightLine className='about-icon' />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
