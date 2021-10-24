import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { useParams } from 'react-router-dom';

const OrderId = (props) => {

  let { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>OrderId view</h2>
      <span>Order Id: {id}</span>
    </div>
  );
};

OrderId.propTypes = {
};

export default OrderId;