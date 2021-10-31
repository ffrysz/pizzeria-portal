import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Events = (props) => {

  return (
    <div className={styles.component}>
      <h2>Events view</h2>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} >New event</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/123`} >Event 123</Button>
    </div>
  );
};

Events.propTypes = {
};

export default Events;