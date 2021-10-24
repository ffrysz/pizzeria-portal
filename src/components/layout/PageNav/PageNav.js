import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom';

const PageNav = (props) => {

  return (
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables/booking`} activeClassName='active'>Booking</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables/events`} activeClassName='active'>Events</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter/order`} activeClassName='active'>Order</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
    </nav>
  );
};

PageNav.propTypes = {
};

export default PageNav;