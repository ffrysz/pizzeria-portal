import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Order = (props) => {

  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} >New order</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/123`} >Order 123</Button>
    </div>
  );
};

Order.propTypes = {
};

export default Order;