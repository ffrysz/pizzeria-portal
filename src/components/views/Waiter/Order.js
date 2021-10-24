import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Order = (props) => {

  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} >New order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} >Order id</Link>
    </div>
  );
};

Order.propTypes = {
};

export default Order;