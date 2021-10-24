import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { useParams } from 'react-router-dom';

const BookingId = (props) => {

  let { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>BookingId view</h2>
      <span>Booking Id: {id}</span>
    </div>
  );
};

BookingId.propTypes = {
};

export default BookingId;