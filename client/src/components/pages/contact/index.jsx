import React from 'react';
import './style.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='contact'>
      <p className='contact-title'>Contact Us</p>
      <div className='contact-content'>
        <div className='contact-content-left'>
          <h3 className='contact-content-title'>Contact</h3>
          <form
            action=''
            className='contact-form'
          >
            <input
              type='text'
              placeholder='Name'
            />
            <input
              type='email'
              placeholder='Email'
            />
            <input
              type='tel'
              placeholder='Phone Number'
            />
            <textarea
              name=''
              id=''
              placeholder='Comments'
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className='contact-content-right'>
          <h3 className='contact-content-title'>Get in touch with us</h3>
          <div className='contact-sub'>
            <AiTwotoneHome className='contact-sub-icon' />
            <address>
              Tầng 2, 29T1 Hoàng Đạo Thuý, Phường Trung Hòa, Quận Cầu Giấy, Hà
              Nội.
            </address>
          </div>
          <div className='contact-sub'>
            <AiTwotonePhone className='contact-sub-icon' />
            <a href='tel:+84 0123 456 789'>+84 0123 456 789</a>
          </div>
          <div className='contact-sub'>
            <AiTwotoneMail className='contact-sub-icon' />
            <a href='mailto:demoemail@gmail.com'>demoemail@gmail.com</a>
          </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14898.486179173304!2d105.8015604!3d21.0078024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad038af6ddf1%3A0x695f09ac46f5b5ca!2smindX%20Coworking%20Space!5e0!3m2!1svi!2s!4v1680095782829!5m2!1svi!2s'
        className='contact-map'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
