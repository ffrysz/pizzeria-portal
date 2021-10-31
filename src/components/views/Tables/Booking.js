import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Booking = (props) => {

  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/123`}>Booking 123</Button>
    </div>
  );
};

Booking.propTypes = {
};

export default Booking;