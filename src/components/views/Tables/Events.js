import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Events = (props) => {

  return (
    <div className={styles.component}>
      <h2>Events view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} >New event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`} >Event id</Link>
    </div>
  );
};

Events.propTypes = {
};

export default Events;