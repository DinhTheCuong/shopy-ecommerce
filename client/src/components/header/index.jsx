import React, { useContext } from 'react';
import { AppContext } from '../../App.js';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/logo2.png';
import { BsBag } from 'react-icons/bs';
import { HiUserCircle } from 'react-icons/hi';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { CiMobile3 } from 'react-icons/ci';
import { CiLaptop } from 'react-icons/ci';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiPalette } from 'react-icons/ci';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { GrMapLocation } from 'react-icons/gr';
import { BiLogIn } from 'react-icons/bi';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { toast } from 'react-toastify';
import SearchBar from '../searchBar/index.jsx';

const Header = () => {
  const homeValue = useContext(AppContext);
  const handleDelete = (id) => {
    homeValue.setHomeCart(
      homeValue.homeCart.filter((element) => element._id !== id),
      toast.error('Removed from cart!')
    );
  };
  const handleOpenSidebar = () => {
    document.getElementById('sidebar').style.display = 'block';
  };
  let numberOfHomeCart = 0;
  homeValue.homeCart.map((ele) => (numberOfHomeCart += ele.amount));
  const user = JSON.parse(localStorage.getItem('user'));
  const handleLogout = () => {
    localStorage.removeItem('user');
  };
  return (
    <div className='header'>
      <div className='header-tag'>
        <div className='header-tag-addr'>
          <GrMapLocation className='header-tag-icon' />
          <p>29T1 - Hoang Dao Thuy, Trung Hoa, Cau Giay, Ha Noi</p>
        </div>

        <div className='header-tag-username'>
          {user ? (
            <p>
              Welcome, <span>{user.email}</span>!
            </p>
          ) : (
            <p>
              Welcome, <span>Guest</span>!
            </p>
          )}
        </div>
      </div>
      <div className='header-top'>
        <div className='header-top-container'>
          <HiOutlineBars3BottomLeft
            className='header-sidebar-icon'
            id='sidebar-icon'
            onClick={handleOpenSidebar}
          />
          <Link
            className='header-logo-link'
            to='/'
          >
            <img
              className='header-logo'
              src={logo}
              alt=''
            />
          </Link>
          <SearchBar />
          <div className='header-link'>
            <div className='header-cart'>
              <Link to='/cart'>
                <BsBag className='cart-icon' />
                <div className='cart-number'>
                  <p>{numberOfHomeCart}</p>
                </div>
              </Link>
              <div className='cart-list'>
                <div className='cart-prod-section'>
                  {homeValue.homeCart.length === 0 ? (
                    <div className='cart-empty'>Empty</div>
                  ) : (
                    homeValue.homeCart.map((element) => (
                      <div
                        className='cart-prod-item'
                        key={element._id}
                      >
                        <img
                          className='cart-prod-img'
                          src={element.images[0]}
                          alt=''
                        />
                        <div className='cart-prod-detail'>
                          <p className='cart-prod-name'>{element.title}</p>
                          <div className='cart-prod-price-amount'>
                            <p className='cart-prod-price'>
                              $ {element.price.$numberDecimal}
                            </p>
                            <p className='cart-prod-amount'>
                              x {element.amount}
                            </p>
                          </div>
                        </div>
                        <MdOutlineDeleteForever
                          onClick={() => handleDelete(element._id)}
                          className='cart-del-icon'
                        />
                      </div>
                    ))
                  )}
                </div>
                <div className='cart-sub'>
                  <div className='cart-sub-total'>
                    <p>Subtotal</p>
                    <span>$ {homeValue.totalPrice}</span>
                  </div>
                </div>
                <Link to='/cart'>
                  <button className='view-cart-btn'>View Cart</button>
                </Link>
                <Link to='/checkout'>
                  <button className='checkout-btn'>Checkout Now</button>
                </Link>
                <p className='cart-prod-last'>Get Return within 30 days</p>
              </div>
            </div>
            <div className='header-user hide-on-tablet hide-on-mobile'>
              <HiUserCircle className='user-icon' />
              <div className='header-logout'>
                {user && user.roles === 'ADMIN' ? (
                  <>
                    <a href='/admin-page/products-manager'>
                      <MdOutlineAdminPanelSettings className='user-icon-option' />
                      Admin Page
                    </a>
                    <a
                      href='/'
                      onClick={handleLogout}
                    >
                      <BiLogOut className='user-icon-option' /> 
                      Logout
                    </a>
                  </>
                ) : user ? (
                  <a
                    href='/'
                    onClick={handleLogout}
                  >
                    <BiLogOut className='user-icon-option' />
                    Logout
                  </a>
                ) : (
                  <>
                    <Link to='/login'>
                      <BiLogIn className='user-icon-option' />
                      Login
                    </Link>
                    <Link to='/register'>
                      <HiOutlineUserAdd className='user-icon-option' />
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-navbar hide-on-tablet hide-on-mobile'>
        <div className='header-navbar-container'>
          <div className='category'>
            <div className='category-header'>
              <HiOutlineBars3CenterLeft className='category-icon' />
              <p>All Categories</p>
              <RiArrowDropDownLine className='category-icon' />
            </div>
            <div className='category-list'>
              <div className='category-item'>
                <Link to='/all-products'>
                  <CiMobile3 className='category-item-icon' />
                  <p>Mobile</p>
                  <RiArrowDropRightLine className='category-item-icon' />
                </Link>
              </div>
              <div className='category-item'>
                <Link to='/all-products'>
                  <CiLaptop className='category-item-icon' />
                  <p>Laptop</p>
                  <RiArrowDropRightLine className='category-item-icon' />
                </Link>
              </div>
              <div className='category-item'>
                <Link to='/all-products'>
                  <IoGameControllerOutline className='category-item-icon' />
                  <p>Gaming</p>
                  <RiArrowDropRightLine className='category-item-icon' />
                </Link>
              </div>
              <div className='category-item'>
                <Link to='/all-products'>
                  <CiPalette className='category-item-icon' />
                  <p>Accessories</p>
                  <RiArrowDropRightLine className='category-item-icon' />
                </Link>
              </div>
            </div>
          </div>
          <div className='header-navbar-list'>
            <div className='header-navbar-item'>
              <NavLink
                to='/'
                className='navbar-item-link'
              >
                Home Page
              </NavLink>
            </div>
            <div className='header-navbar-item'>
              <NavLink
                to='/all-products'
                className='navbar-item-link'
              >
                All Products
              </NavLink>
            </div>
            <div className='header-navbar-item'>
              <NavLink
                to='/contact-us'
                className='navbar-item-link'
              >
                Contact Us
              </NavLink>
            </div>
            <div className='header-navbar-item'>
              <NavLink
                to='/about-us'
                className='navbar-item-link'
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
