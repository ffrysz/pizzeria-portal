import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { useParams } from 'react-router-dom';

const EventId = (props) => {

  let { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>EventId view</h2>
      <span>Event Id: {id}</span>
    </div>
  );
};

EventId.propTypes = {
};

export default EventId;