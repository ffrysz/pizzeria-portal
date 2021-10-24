import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Booking = (props) => {

  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} >New booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} >Booking id</Link>
    </div>
  );
};

Booking.propTypes = {
};

export default Booking;