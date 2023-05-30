import React from 'react';
import './style.css';
import { RxDashboard } from 'react-icons/rx';
import { CgListTree } from 'react-icons/cg';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin-page'>
      <div className='admin-sidebar'>
        <NavLink
          className='admin-sidebar-link'
          to='/admin-page/dashboard'
        >
          <RxDashboard className='admin-sidebar-icon' />
          Dashboard
        </NavLink>
        <NavLink
          className='admin-sidebar-link'
          to='/admin-page/add-product'
        >
          <CgListTree className='admin-sidebar-icon' />
          Products Manager
        </NavLink>
        <NavLink
          className='admin-sidebar-link'
          to='/admin-page/users-manager'
        >
          <HiOutlineUserGroup className='admin-sidebar-icon' />
          Users Manager
        </NavLink>
      </div>
      <div className='admin-view-section'>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
